const mongoose = require('../../config/db');
const Float = require('mongoose-float').loadType(mongoose);
const operationSchema = mongoose.Schema({
  card:{
      type:String,

      required:true
  },
  date:{
    type:String,
    required:true
  },
  value:{
    type:Float,
    required: true
  },
  type:{
    type:String,
    required:true
  },
  establishment:{
    type:String,

  },
  hour:{
    type:String,
    required:true
  },
  bank:{
    type:String
  },
  user:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
  }


},{timestamps:true});

const operations = mongoose.model('Operations',operationSchema);
module.exports= operations;
