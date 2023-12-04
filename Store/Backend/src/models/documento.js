const mongoose =require('mongoose');

const docSchema=mongoose.Schema(
    {
        t_doc:{
            type:String,
            required: true
        },
        desc_tdoc:{
            type:String,
            required: true
        },
        tdoc_estado:{
            type:String,
            required:true
        }

    }
);

module.exports =mongoose.model('tipodocs',docSchema);