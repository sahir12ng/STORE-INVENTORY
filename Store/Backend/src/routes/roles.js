const express = require('express');
const rolSchema=require('../models/rol');

const router = express.Router();

router.post('/roles',(req,res)=>{
    const userDev =rolSchema(req.body);
    userDev.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

router.get('/roles',(req,res)=>{
    rolSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

router.get('/roles/:id',(req,res)=>{
    const {id}=req.params;
    rolSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

router.put('/roles/:id',(req,res)=>{
    const {id} =req.params;
    const {id_rol,nomb_rol}=req.body;

    rolSchema
    .updateOne({_id:id},{$set:{id_rol,nomb_rol}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"updateOne"}))
});

router.delete('/roles/:id',(req,res)=>{
    const {id} =req.params;

    rolSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;