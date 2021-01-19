const mongoose = require('../../config/db');
const Float = require('mongoose-float').loadType(mongoose);
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
   name:{
       type:String,
       required: true
   },
    cpf:{
      type:Number,
      required:true,
      unique:true
    }
   ,email:{
    type:String,
    required: true,
    unique:true
   },
   adress:{
      type:String,
      required:true
   },
   cep:{
     type:Number,
     required:true
   },
   password:{
    type:String,
    required: true,
    select:false
   },
  balance:{
    type:Float,
    defaault: 0.0
  }

},{timestamps:true});

userSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
});

const user = mongoose.model('User',userSchema);
module.exports= user;
