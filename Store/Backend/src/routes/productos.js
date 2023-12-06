const express = require('express');
const prodSchema = require('../models/Productos');

const router = express.Router();

router.post('/producto', async (req, res) => {
    try {
        const nuevoProducto = new prodSchema(req.body);
        const productoGuardado = await nuevoProducto.save();

        if (productoGuardado) {
            res.status(201).json(productoGuardado);
            console.log('Producto guardado correctamente:', productoGuardado);
        } else {
            console.error('Producto no guardado correctamente en la base de datos.');
            res.status(500).json({ message: 'Error interno del servidor al guardar producto. Detalles: Producto no guardado correctamente.' });
        }
    } catch (error) {
        console.error('Error al guardar producto:', error);

        if (error.name === 'ValidationError') {
            res.status(400).json({ message: `Error de validación: ${error.message}` });
        } else {
            res.status(500).json({ message: `Error interno del servidor al guardar producto. Detalles: ${error.message}` });
        }
    }
});

router.get('/producto',(req,res)=>{
    prodSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

router.get('/producto/:id',(req,res)=>{
    const {id}=req.params;
    prodSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

router.put('/producto/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const productoActualizado = await prodSchema.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!productoActualizado) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      res.json(productoActualizado);
    } catch (error) {
      console.error('Error al editar producto:', error);
      res.status(500).json({ message: `Error interno del servidor al editar producto. Detalles: ${error.message}` });
    }
  });
  

router.delete('/producto/:id',(req,res)=>{
    const {id} =req.params;

    prodSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;