// perfilRoutes.js
const express = require('express');
const UserModel = require('../models/userModels');

const router = express.Router();

router.put('/actualizarPerfil/:userId', async (req, res) => {
  try {
    console.log('Entrando en la ruta de actualización de perfil');

    // Agrega un registro del token de autorización
    const userId = req.headers.authorization;
    console.log('Token de autorización:', userId);

    // Comparar el ID del usuario del token con el ID proporcionado en la solicitud
    console.log('Token userId:', req.params.userId);
    console.log('Request userId:', req.body.userId);

    if (String(req.params.userId) !== String(req.body.userId)) {
      console.log('No estás autorizado para actualizar este perfil.');
      return res.status(403).json({ success: false, message: 'No estás autorizado para actualizar este perfil.' });
    }

    // Continuar con la actualización del perfil
    const updateFields = {
      // Otros campos que siempre deseas actualizar
      correo_usuario: req.body.nuevoCorreo,
      telefono: req.body.nuevoTelefono,
      contraseña: req.body.nuevaContraseña,
      ver_p_seg: req.body.nuevoVerPregSeg,
    };

    // Actualizar campos opcionales solo si no son espacios en blanco
    if (req.body.nuevoUsername !== undefined && req.body.nuevoUsername.trim() !== '') {
      updateFields.username = req.body.nuevoUsername;
    }

    // Puedes agregar más campos opcionales aquí

    // Realizar la actualización en la base de datos
    const usuarioActualizado = await UserModel.findByIdAndUpdate(
      req.params.userId,
      updateFields,
      { new: true }
    );

    if (!usuarioActualizado) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    console.log('Perfil actualizado con éxito:', usuarioActualizado);

    res.status(200).json({ success: true, message: 'Perfil actualizado con éxito', usuario: usuarioActualizado });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    res.status(500).json({ success: false, message: 'Error al actualizar el perfil', error: error.message });
  }
});

module.exports = router;
