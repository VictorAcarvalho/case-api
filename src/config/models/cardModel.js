const mongoose = require('../db');

const CardSchema = mongoose.Schema({
    number:{
        type:Number,
        required:true,
        select:false
    },
    bank:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    securityCode:{
        type:Number,
        required:true,
        select:false
    }
});

const card = mongoose.model('card',CardSchema);
module.exports= card;