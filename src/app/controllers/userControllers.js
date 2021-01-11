const userModel = require('../models/userModel');
const cardModel = require('../models/cardModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
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
      return res.status(200).json({token});
   };

   //Funcionalidades cartão

   //Cadastra um cartão
    async storeCard(req,res){
    try {
        const userCard = await cardModel.create(req.body);
        return res.status(201).json({userCard});
    } catch (error) {

      return  res.status(400).json({error:'Error ao criar um novo cartão!'})
    }
  };
  //Lista todos os cartões do usuário
    async list(req,res){
      try {
        const userCards = await cardModel.find();
        return res.status(200).json({userCards});
      } catch (error) {
        return  res.status(400).json({error:'Error ao listar os cartões!'});
      }
  };





};

module.exports= new UserControllers();
