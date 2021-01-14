const mongoose = require('../../config/db');

const operationSchema = mongoose.Schema({
  card:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Cards',
      required:true
  },
  date:{
    type:String,
    required:true
  },
  value:{
    type:Number,
    required: true
  },
  type:{
    type:String,
    required:true
  },
  establishment:{
    type:String,
    required:true
  },
  hour:{
    type:String,
    required:true
  }


},{timestamps:true});

const operations = mongoose.model('Operations',operationSchema);
module.exports= operations;
