const express = require('express');
const provSchema = require('../models/proveedor');

const router = express.Router();
router.post('/proveedor', async (req, res) => {
    try {
      const nuevoProveedor = new provSchema(req.body);
  
      console.log('Proveedor antes de guardar:', nuevoProveedor);
  
      const proveedorGuardado = await nuevoProveedor.save();
  
      console.log('Proveedor guardado:', proveedorGuardado);
  
      if (proveedorGuardado) {
        res.status(201).json(proveedorGuardado);
      } else {
        console.error('Proveedor no guardado correctamente en la base de datos.');
        res.status(500).json({ message: 'Error interno del servidor al guardar proveedor. Detalles: Proveedor no guardado correctamente.' });
      }
    } catch (error) {
      console.error('Error al guardar proveedor:', error);
  
      if (error.name === 'ValidationError') {
        // Manejar errores de validación de Mongoose
        res.status(400).json({ message: `Error de validación: ${error.message}` });
      } else {
        res.status(500).json({ message: `Error interno del servidor al guardar proveedor. Detalles: ${error.message}` });
      }
    }
  });
  
  
  

router.get('/proveedor',(req,res)=>{
    provSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

router.get('/proveedor/:id',(req,res)=>{
    const {id}=req.params;
    provSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

router.put('/proveedor/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const proveedorActualizado = await provSchema.findByIdAndUpdate(id, req.body, { new: true });

    if (!proveedorActualizado) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    res.json(proveedorActualizado);
  } catch (error) {
    console.error('Error al editar proveedor:', error);
    res.status(500).json({ message: `Error interno del servidor al editar proveedor. Detalles: ${error.message}` });
  }
});


router.delete('/proveedor/:id',(req,res)=>{
    const {id} =req.params;

    provSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;