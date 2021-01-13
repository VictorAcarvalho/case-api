const cardModel = require('../models/cardModel');

class CardControllers{

   //Cadastra um cartão
   async storeCard(req,res){
    try {
        req.body.user= req.id
        const userCard = await cardModel.create(req.body);

        return res.status(201).json({userCard});
    } catch (error) {
      logger.info(error);
      return  res.status(400).json({error:'Error ao criar um novo cartão!'})
    }
  };


  //Lista todos os cartões do usuário
    async list(req,res){
      try {
        const userCards = await cardModel.find({user:req.id}).populate('users');
        return res.status(200).json({userCards});
      } catch (error) {
        return  res.status(400).json({error:'Error ao listar os cartões!'});
      }
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
