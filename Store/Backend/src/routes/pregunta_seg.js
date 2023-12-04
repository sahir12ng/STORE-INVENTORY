const express = require('express');
const psSchema=require('../models/pregunta');

const router = express.Router();

router.post('/pregunta_seg',(req,res)=>{
    const userDev =psSchema(req.body);
    userDev.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

router.get('/pregunta_seg',(req,res)=>{
    psSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletAll"}))
});

router.get('/pregunta_seg/:id',(req,res)=>{
    const {id}=req.params;
    psSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"seletOne"}))
});

router.put('/pregunta_seg/:id',(req,res)=>{
    const {id} =req.params;
    const {id_p_seg,p_seg}=req.body;

    psSchema
    .updateOne({_id:id},{$set:{id_p_seg,p_seg}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"updateOne"}))
});

router.delete('/pregunta_seg/:id',(req,res)=>{
    const {id} =req.params;

    psSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error,query:"deleteOne"}))
});

module.exports =router;