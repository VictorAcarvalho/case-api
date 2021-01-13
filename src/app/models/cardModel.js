const { Schema } = require('../../config/db');
const mongoose = require('../../config/db');

const CardSchema = mongoose.Schema({
    number:{
        type:String,
        required:true,

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
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true,
    },
    active:{
      type:Boolean,
      required:true,
      default:false
    }
},{timestamps:true});

const userCard = mongoose.model('Cards',CardSchema);
module.exports= userCard;
