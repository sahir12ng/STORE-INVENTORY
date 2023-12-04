const express = require('express');
const rompimientoSchema=require('../models/persona_has_roles');

const router = express.Router();

router.post('/persona_has_roles',(req,res)=>{
    const userDev =rompimientoSchema(req.body);
    userDev.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

router.get('/persona_has_roles',(req,res)=>{
    rompimientoSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

router.get('/persona_has_roles/:id',(req,res)=>{
    const {id}=req.params;
    rompimientoSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

router.put('/persona_has_roles/:id',(req,res)=>{
    const {id} =req.params;
    const {idcategoria,desc_categoria}=req.body;

    rompimientoSchema
    .updateOne({_id:id},{$set:{idcategoria,desc_categoria}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"updateOne"}))
});

router.delete('/persona_has_roles/:id',(req,res)=>{
    const {id} =req.params;

    rompimientoSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;