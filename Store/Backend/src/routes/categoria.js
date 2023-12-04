const express = require('express');
const catSchema=require('../models/categoria');

const router = express.Router();

router.post('/categoria',(req,res)=>{
    const userDev =catSchema(req.body);
    userDev.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

router.get('/categoria',(req,res)=>{
    catSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

router.get('/categoria/:id',(req,res)=>{
    const {id}=req.params;
    catSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

router.put('/categoria/:id',(req,res)=>{
    const {id} =req.params;
    const {idcategoria,desc_categoria}=req.body;

    catSchema
    .updateOne({_id:id},{$set:{idcategoria,desc_categoria}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"updateOne"}))
});

router.delete('/categoria/:id',(req,res)=>{
    const {id} =req.params;

    catSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;