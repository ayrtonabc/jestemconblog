import type { VercelRequest, VercelResponse } from '@vercel/node';

export interface AuthenticatedRequest extends VercelRequest {
  isAuthenticated?: boolean;
  adminToken?: string;
}

/**
 * Middleware para verificar la autenticación del administrador
 */
export function verifyAdminAuth(req: AuthenticatedRequest, res: VercelResponse, next?: () => void): boolean {
  try {
    // Verificar token en headers
    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
    
    // Verificar token en cookies
    const cookies = req.headers.cookie;
    const sessionCookie = cookies?.split(';')
      .find(c => c.trim().startsWith('admin_session='))
      ?.split('=')[1];

    // Verificar token en body (para requests POST)
    const tokenFromBody = req.body?.adminToken;

    const token = tokenFromHeader || tokenFromBody;
    const adminToken = process.env.ADMIN_TOKEN;

    if (!adminToken) {
      console.error('ADMIN_TOKEN no está configurado');
      res.status(500).json({ 
        success: false, 
        message: 'Error de configuración del servidor' 
      });
      return false;
    }

    // Verificar token directo
    if (token === adminToken) {
      req.isAuthenticated = true;
      req.adminToken = token;
      if (next) next();
      return true;
    }

    // Verificar sesión de cookie
    if (sessionCookie) {
      try {
        const decoded = Buffer.from(sessionCookie, 'base64').toString();
        if (decoded.startsWith('admin:')) {
          const timestamp = parseInt(decoded.split(':')[1]);
          const now = Date.now();
          
          // Verificar que la sesión no haya expirado (24 horas)
          if (now - timestamp < 86400000) {
            req.isAuthenticated = true;
            req.adminToken = adminToken;
            if (next) next();
            return true;
          }
        }
      } catch (error) {
        console.error('Error decodificando sesión:', error);
      }
    }

    // No autenticado
    res.status(401).json({ 
      success: false, 
      message: 'No autorizado - Token de administrador requerido' 
    });
    return false;

  } catch (error) {
    console.error('Error en middleware de autenticación:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor' 
    });
    return false;
  }
}

/**
 * Wrapper para endpoints que requieren autenticación
 */
export function withAuth(handler: (req: AuthenticatedRequest, res: VercelResponse) => Promise<void> | void) {
  return async (req: AuthenticatedRequest, res: VercelResponse) => {
    if (verifyAdminAuth(req, res)) {
      return handler(req, res);
    }
  };
}