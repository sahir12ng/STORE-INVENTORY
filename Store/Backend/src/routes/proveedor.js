const express = require('express');
const provSchema = require('../models/proveedor');

const router = express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      proveedor:
 *        type: object
 *        properties:
 *          Id_proveedor:
 *            type: integer
 *            description: el id del proveedor
 *          nombre_proveedor:
 *            type: string
 *            description: el nombre del proveedor
 *          direccion_proveedor:
 *            type: string
 *            description: la direccion del proveedor
 *        required:
 *            - Id_proveedor
 *            - nombre_proveedor
 *            - direccion_proveedor
 *        example:
 *            Id_proveedor: 258
 *            nombre_proveedor: MONITA
 *            direccion_proveedor: cr 8 c bis #96-85 sur
 * 
 */

/**
 * @swagger
 * /api/proveedor:
 *   post:
 *      summary: crear proveedor
 *      tags: [proveedor]
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/proveedor'
 *      responses:
 *        200:
 *          description: nuevo proveedor creado
 */

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
  
  
  /**
  * @swagger
  * /api/proveedor:
  *   get:
  *      summary: obtener todos los proveedores
  *      tags: [proveedor]
  *      responses:
  *        200:
  *          description: todos los proveedores
  *          content:
  *             application/json:
  *                schema:
  *                  type: array
  *                  items:
  *                     $ref: '#/components/schemas/proveedor'  
  */

router.get('/proveedor',(req,res)=>{
    provSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

 /**
  * @swagger
  * /api/proveedor/{id}:
  *   get:
  *      summary: obtener un proveedor en especifico
  *      tags: [proveedor]
  *      parameters:
  *        - in: path
  *          name: id
  *          schema:
  *             type: string
  *          required: true
  *          description: el id del proveedor
  *      responses:
  *        200:
  *          description: todos los proveedores
  *          content:
  *             application/json:
  *                schema:
  *                  type: array
  *                  items:
  *                     $ref: '#/components/schemas/proveedor'  
  *        404:
  *          description: proveedor no encontrado 
  */

router.get('/proveedor/:id',(req,res)=>{
    const {id}=req.params;
    provSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

/**
  * @swagger
  * /api/proveedor/{id}:
  *   put:
  *      summary: actualizar proveedor
  *      tags: [proveedor]
  *      parameters:
  *        - in: path
  *          name: id
  *          schema:
  *             type: string
  *          required: true
  *          description: el id del proveedor
  *      requestBody:
  *       required: true
  *       content:
  *           application/json:
  *               schema:
  *               type: object
  *               $ref: '#/components/schemas/proveedor'    
  *      responses:
  *        200:
  *          description: proveedor actualizado
  *        404:
  *          description: proveedor no encontrado 
  */

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

 /**
  * @swagger
  * /api/proveedor/{id}:
  *   delete:
  *      summary: elimina proveedor
  *      tags: [proveedor]
  *      parameters:
  *        - in: path
  *          name: id
  *          schema:
  *             type: string
  *          required: true
  *          description: el id del proveedor
  *      responses:
  *        200:
  *          description: proveedor eliminado
  *        404:
  *          description: proveedor no encontrado 
  */

router.delete('/proveedor/:id',(req,res)=>{
    const {id} =req.params;

    provSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;