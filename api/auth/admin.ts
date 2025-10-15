import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { token } = req.body;

    // Verificar que el token esté presente
    if (!token) {
      return res.status(400).json({ 
        success: false, 
        message: 'Token es requerido' 
      });
    }

    // Obtener el token de administrador desde las variables de entorno
    const adminToken = process.env.ADMIN_TOKEN;

    if (!adminToken) {
      console.error('ADMIN_TOKEN no está configurado en las variables de entorno');
      return res.status(500).json({ 
        success: false, 
        message: 'Error de configuración del servidor' 
      });
    }

    // Verificar el token
    if (token !== adminToken) {
      return res.status(401).json({ 
        success: false, 
        message: 'Token de administrador inválido' 
      });
    }

    // Token válido - generar sesión
    const sessionToken = Buffer.from(`admin:${Date.now()}`).toString('base64');

    // Configurar cookie de sesión (opcional, para mayor seguridad)
    res.setHeader('Set-Cookie', [
      `admin_session=${sessionToken}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
    ]);

    return res.status(200).json({ 
      success: true, 
      message: 'Autenticación exitosa',
      sessionToken 
    });

  } catch (error) {
    console.error('Error en autenticación de administrador:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor' 
    });
  }
}