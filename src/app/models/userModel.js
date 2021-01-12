const mongoose = require('../../config/db');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
   name:{
       type:String,
       required: true
   },
   email:{
    type:String,
    required: true,
    unique:true
   },
   password:{
    type:String,
    required: true,
    select:false
   }


},{timestamps:true});

userSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
});

const user = mongoose.model('User',userSchema);
module.exports= user;
