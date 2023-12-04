const express = require('express');
const UserModel = require('../models/userModels');

const router = express.Router();

router.post('/user', async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const userDev = new UserModel(req.body);
    const savedUser = await userDev.save();
    res.json(savedUser);
  } catch (error) {
    console.error('Error al insertar en la base de datos:', error);
    res.status(500).json({ success: false, message: 'Error al insertar en la base de datos', error: error.message });
  }
});


router.get('/user', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios de la base de datos', error });
  }
});

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario de la base de datos', error });
  }
});

router.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre1, nombre2, apellido1, apellido2, correo_usuario, telefono, username, contraseña, Id_pregunta_seg, ver_p_seg } = req.body;

  try {
    const updatedUser = await UserModel.updateOne({ _id: id }, {
      $set: {
        nombre1, nombre2, apellido1, apellido2, correo_usuario, telefono, username, contraseña, Id_pregunta_seg, ver_p_seg
      }
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario en la base de datos', error });
  }
});

router.delete('/user/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await UserModel.deleteOne({ _id: id });
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario de la base de datos', error });
  }
});

module.exports = router;
