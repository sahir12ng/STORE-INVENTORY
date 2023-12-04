const mongoose =require('mongoose');

const psSchema=mongoose.Schema(
    {
        id_p_seg:{
            type:Number,
            required: true
        },
        p_seg:{
            type:String,
            required: true
        }

    }
);

module.exports =mongoose.model('pregunta_seg',psSchema);