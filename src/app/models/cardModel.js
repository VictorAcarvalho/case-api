const mongoose = require('../../config/db');

const CardSchema = mongoose.Schema({
    number:{
        type:Number,
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
    active:{
      type:Boolean,
      default:true
    },
    cards:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'digitalCards'
    }]
},{timestamps:true});


const userCard = mongoose.model('Cards',CardSchema);
module.exports= userCard;
