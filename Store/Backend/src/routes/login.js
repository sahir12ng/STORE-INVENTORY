const express = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModels');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar el usuario por nombre de usuario
    const user = await UserModel.findOne({ username });

    // Verificar si el usuario existe y la contraseña coincide
    if (user && user.contraseña === password) {
      // Generar token de autenticación
      const token = jwt.sign({ userId: user._id, username: user.username }, 'sol', { expiresIn: '1h' });

      // Devolver información del usuario y token
      res.status(200).json({
        success: true,
        message: 'Inicio de sesión exitoso',
        user: { userId: user._id, username: user.username },
        token: token,
      });
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

module.exports = router;
