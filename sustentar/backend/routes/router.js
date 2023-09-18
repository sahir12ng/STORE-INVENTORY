import { Router } from "express";
import dotenv from "dotenv";
import usuarioModel from "../models/usuario.js";
dotenv.config();
const router = Router();

// Ruta para registrar usuarios
router.post('/usuarios', async (req, res) => {
  try {
    const { tipoDocumento, nombre, contra } = req.body;
    const data = new usuarioModel({
        tipoDocumento: tipoDocumento,
        nombre: nombre,
        contra: contra
      });
    const result = await data.save();   
    res.status(200).json({message:"Registro exítoso"});
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

export default router;