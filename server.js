const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS para desarrollo
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Función para cargar y ejecutar handlers de API
const loadApiHandler = (apiPath) => {
  try {
    const fullPath = path.join(__dirname, 'api', apiPath + '.ts');
    
    // Para desarrollo, vamos a simular el comportamiento de Vercel
    if (apiPath === 'auth/admin') {
      return (req, res) => {
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
              error: 'Token es requerido' 
            });
          }

          // Obtener el token de administrador desde las variables de entorno
          const adminToken = process.env.ADMIN_TOKEN;

          if (!adminToken) {
            console.error('ADMIN_TOKEN no está configurado en las variables de entorno');
            return res.status(500).json({ 
              success: false, 
              error: 'Error de configuración del servidor' 
            });
          }

          console.log('Token recibido:', token);
          console.log('Token esperado:', adminToken);

          // Verificar el token
          if (token !== adminToken) {
            return res.status(401).json({ 
              success: false, 
              error: 'Token de administrador inválido' 
            });
          }

          // Token válido - generar sesión
          const sessionToken = Buffer.from(`admin:${Date.now()}`).toString('base64');

          // Configurar cookie de sesión (opcional, para mayor seguridad)
          res.setHeader('Set-Cookie', [
            `admin_session=${sessionToken}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`
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
            error: 'Error interno del servidor' 
          });
        }
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading API handler ${apiPath}:`, error);
    return null;
  }
};

// Rutas API
app.all('/api/auth/admin', (req, res) => {
  const handler = loadApiHandler('auth/admin');
  if (handler) {
    handler(req, res);
  } else {
    res.status(404).json({ error: 'API endpoint not found' });
  }
});

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: {