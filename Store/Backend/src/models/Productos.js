const { ObjectId } = require('mongodb');
const mongoose =require('mongoose');

const prodSchema=mongoose.Schema(
    {
        Id_producto:{
            type:Number,
            required: true
        },
        nom_producto:{
            type:String,
            required: true
        },
        valor_producto:{
            type:String,
            required:true
        },
        disponibilidad_producto:{
            type:String,
            required: true
        },
        proveedor_Id_proveedor:{
            type:ObjectId,
            required: true
        },
        Categoria :{
            type:ObjectId,
            required:true  
        }

    }
);

module.exports =mongoose.model('producto',prodSchema);