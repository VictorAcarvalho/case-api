const cardModel = require('../models/cardModel');
const logger = require('../../helper/logger');
const userCard = require('../models/cardModel');
class CardControllers{

   //Cadastra um cartão
   async storeCard(req,res){

        req.body.user= req.id
        const userCard = await cardModel.create(req.body);

        return res.status(201).json({userCard});
  };


  //Lista todos os cartões do usuário
    async list(req,res){

        const userCards = await cardModel.find({user:req.id,active:true}).populate('users');
        return res.status(200).json({userCards});
      };


  // Atualiza dados do cartão
  async update(req,res){
    req.body.user= req.id
    const {id}= req.params
    const userCards = await cardModel.findByIdAndUpdate(id,req.body,{new:true});
    return res.status(201).json({userCards});
  }

  //Soft delete
  async softDelete(req,res){
    req.body.user=req.id;
    req.body.active = false;
    const {id} = req.params
    const userCards = await cardModel.findByIdAndUpdate(id,req.body);
    return res.status(200).json({userCards});
  }
}

module.exports = new CardControllers();
