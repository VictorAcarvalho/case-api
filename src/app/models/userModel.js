const mongoose = require('../../config/db');
const bcrypt = require('bcryptjs');
const { Schema } = require('../../config/db');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false

    },
    cnpj:{
        type:Number,
        required:true
    },
    adress:{
        number:{
            type:Number,
            required:true
        },
        street:{
            type:String,
            required:true
        },
        neighborhood:{
            type:String,
            required:true
        },
        city:{
          type:String,
          required:true
        },
        state:{
            type:String,
            required:true
        }
    },
    cards:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Cards'
    }]

    },{timestamps:true})
userSchema.pre('save',async function(next){
  const hash =bcrypt.hash(this.password,10);
  this.password= hash;
  next()
});

const user = mongoose.model('User',userSchema);
module.exports = user;
