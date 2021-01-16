const cardModel = require('../models/cardModel');
const jwt = require('jsonwebtoken');
class CardControllers{



   //Cadastra um cartão digital
   async store(req,res){
    const generatorCard = createCardNumber();
    const {name, expireDate, type,number } = req.body

    const cardCreationObject = {
        number,
        name,
        expireDate,
        type,
        user: req.id,

    }
      if (cardCreationObject.type == 'digital'){
        cardCreationObject.number = generatorCard;
      }
    const digitalCard = await digitalCardModel.create(cardCreationObject);
    res.status(201).json(JSON.parse(digitalCard));
  };


  //Lista todos os cartões do usuário
    async list(req,res){

        const userCards = await cardModel.find({user:req.id,active:true}).populate('users');
        return res.status(200).json({userCards});
      };


  // Atualiza dados do cartão
  async update(req,res){

    const {number} = req.body;
    const userCards = await cardModel.findOneAndUpdate(number,req.body,{new:true});
    return res.status(201).json({userCards});
  }

  //Soft delete
  async softDelete(req,res){
    const {id} = req.params;
    const card = await cardModel.findById(id);
    card.isActive = false;
    const userCards = await cardModel.findOneAndUpdate(id,card);
    return res.status(200).json({userCards});
  };

    createCardNumber= () => {
    return Math.floor(Math.random()*(10000-1000) + 1000 );
};

}

module.exports = new CardControllers();
