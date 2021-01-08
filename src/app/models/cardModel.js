const { Schema } = require('../../config/db');
const mongoose = require('../../config/db');

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

    type:{
      type:String,
        required:true
    },
    userID:{
      type:Schema.Types.ObjectId,
      ref:'User',
      required:true,
    },
},{timestamps:true});

const userCard = mongoose.model('Cards',CardSchema);
module.exports= userCard;
