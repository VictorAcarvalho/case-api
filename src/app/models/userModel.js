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
<<<<<<< HEAD
    default: 0.0,
    required:true
=======
    default: 0.0
>>>>>>> 8a0143b718280a0578d8c26bfbe1f903a3210def
  }

},{timestamps:true});

userSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
});

const user = mongoose.model('User',userSchema);
module.exports= user;
