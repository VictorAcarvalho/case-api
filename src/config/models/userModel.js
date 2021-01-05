const mongoose = require('../db');
const card = require('../models/cardModel');
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
        required:true
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
        neighood:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        }
    },
    
},{timestamps:true})

const user = mongoose.model('User',userSchema);
module.exports = user;