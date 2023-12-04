const { ObjectId } = require('mongodb');
const mongoose =require('mongoose');

const userSchema=mongoose.Schema(
    {
        t_doc_usuario:{
            type: ObjectId,
            required: true
        },
        id_usuario:{
            type:String,
            required: true,
            unique: true
        },
        nombre1:{
            type:String,
            required:true
        },
        nombre2:{
            type:String,
            required:false
        },
        apellido1:{
            type:String,
            required:true
        },
        apellido2:{
            type:String,
            required:false
        },
        correo_usuario:{
            type:String,
            required:true
        },
        telefono:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true

        },
        contraseña:{
            type:String,
            required:true
        },
        Id_pregunta_seg:{
            type:ObjectId,
            required:true
        },
        ver_p_seg:{
            type:String,
            required:true
        }

    }
);

module.exports =mongoose.model('user',userSchema);