const mongoose = require('../../config/db');

const digitalSchema = mongoose.Schema({
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
    }
},{timestamps:true});


const digitalCards = mongoose.model('digitalCards',digitalSchema);
module.exports= digitalCards;
