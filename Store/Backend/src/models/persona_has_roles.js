const { ObjectId } = require('mongodb');
const mongoose =require('mongoose');

const rompimientoSchema=mongoose.Schema(
    {
        persona_tdoc:{
            type: ObjectId,
            required: true
        },
        persona_id:{
            type:ObjectId,
            required: true,
            unique: true
        },
        persona_rol:{
            type:ObjectId,
            required:true
        },
        estado_rol:{
            type:String,
            required:false
        }

    }
);

module.exports =mongoose.model('persona_has_roles',rompimientoSchema);