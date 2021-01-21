const userModel = require('../models/userModel');
const yup = require('yup');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../../helper/logger');
const { error } = require('../../helper/logger');
class UserControllers{


  //cadastra usuário
    async store(req,res){



        const {email} = req.body
        const user = await userModel.findOne({email});
        if(!user){
           const userFinal = await userModel.create(req.body);
           return res.status(201).json({userFinal});
        }

         return res.status(401).json({msg:"Email já cadastrado"});
    };


    //Autentifica o login do usuário
    async auth(req,res){
      const {email,password} = req.body;
      const user = await userModel.findOne({email}).select('password');
      if(!user){
        return res.status(401).json({msg:"Email ou senha inválida"});
      }

      if(!await bcrypt.compare(password, user.password)){
        return res.status(401).json({msg:"Email ou senha inválida"});
      }
      const { _id: id } = user;

      const token = jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: '1d',
      });

      logger.info(id);
      return res.status(200).json({token});
   };

   //Colocar o saldo
   async storeBalance(req,res){

      const userBalance = await userModel.findByIdAndUpdate(req.id,req.body,{new:true});
      res.status(201).json({userBalance});
   };
   //Mostra o saldo
   async showBalance(req,res){

     const listBalance = await userModel.findById(req.id);
     const {balance}= listBalance;

     res.status(200).json({balance});
   };


};

module.exports= new UserControllers();
