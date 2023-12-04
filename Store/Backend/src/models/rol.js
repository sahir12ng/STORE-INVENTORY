const mongoose =require('mongoose');

const rolSchema=mongoose.Schema(
    {
        id_rol:{
            type:String,
            required: true
        },
        nomb_rol:{
            type:String,
            required: true
        }
    }
);

module.exports =mongoose.model('roles',rolSchema);