const mongoose =require('mongoose');

const provSchema=mongoose.Schema(
    {
        Id_proveedor:{
            type:Number,
            required: true
        },
        nombre_proveedor:{
            type:String,
            required: true
        },
        direccion_proveedor:{
            type:String,
            required:true
        }

    }
);

module.exports =mongoose.model('proveedor',provSchema);