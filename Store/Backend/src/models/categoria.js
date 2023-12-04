const mongoose =require('mongoose');

const catSchema=mongoose.Schema(
    {
        idcategoria:{
            type:Number,
            required: true
        },
        desc_categoria:{
            type:String,
            required: true
        }

    }
);

module.exports =mongoose.model('categoria',catSchema);