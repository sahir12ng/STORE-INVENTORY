const express = require('express');
const docSchema=require('../models/documento');

const router = express.Router();

router.post('/tipodoc',(req,res)=>{
    const userDev =docSchema(req.body);
    userDev.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

router.get('/tipodoc',(req,res)=>{
    docSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

router.get('/tipodoc/:id',(req,res)=>{
    const {id}=req.params;
    docSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

router.put('/tipodoc/:id',(req,res)=>{
    const {id} =req.params;
    const {t_doc,desc_tdoc,tdoc_estado}=req.body;

    docSchema
    .updateOne({_id:id},{$set:{t_doc,desc_tdoc,tdoc_estado}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"updateOne"}))
});

router.delete('/tipodoc/:id',(req,res)=>{
    const {id} =req.params;

    docSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;