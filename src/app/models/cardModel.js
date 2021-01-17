const mongoose = require('../../config/db');
const CardSchema = mongoose.Schema({
    number:{
        type:String,
        unique:true

    },
    name:{
        type:String,
        required:true
    },
    expireDate:{
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
    isActive:{
      type:Boolean,
      default:true
    },
},{timestamps:true});


const userCard = mongoose.model('Cards',CardSchema);
module.exports= userCard;
