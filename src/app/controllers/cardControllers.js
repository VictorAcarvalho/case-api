const cardModel = require('../models/cardModel');
const operationModel = require('../models/operationsModel');
const { min, isValid } = require('date-fns');
class CardControllers{



   //Cadastra um cartão digital
   async store(req,res){
    const {name, expireDate, type,number,balance } = req.body


    const cardCreationObject = {
        number,
        name,
        expireDate,
        type,
        user: req.id,
    }


      const generatorCard = Math.floor(Math.random()*(10000-1000)+1000);
      if (cardCreationObject.type === 'digital'){
       const {number,expireDate} = await cardModel.findOne({user:req.id,type:'fisico'});

       cardCreationObject.number= number.substring(0,12)+generatorCard;
       cardCreationObject.expireDate= expireDate;
      };

    const card = await cardModel.create(cardCreationObject);
    return res.status(201).json({card});
  };



   //Lista todos os cartões do usuário
    async list(req,res){
        const userCards = await cardModel.find({user:req.id,isActive:true}).populate('users');

        return res.status(200).json({userCards});
      };


  // Atualiza dados do cartão
  async update(req,res){

    const {id} = req.params;
    const userCards = await cardModel.findByIdAndUpdate(id,req.body,{new:true});
    return res.status(201).json({userCards});
  }

  //Soft delete
  async softDelete(req,res){
    const {id} = req.params;
    const card = await cardModel.findById(id);
    card.isActive = false;
    const userCards = await cardModel.findByIdAndUpdate(id,card);
    return res.status(200).json({userCards});
  };

  //Lista apenas um único cartão e sua última transação
  async showCardandTransition(req,res){
    const{id}= req.params;
    const cardOp = await cardModel.findById(id);
    const listOperation = await operationModel.find({card:id}).sort({ createdAt: -1 }).limit(1);
    console.log(listOperation)
    return res.status(200).json({cardOp,listOperation});
  }

  //Lista um único cartão
  async show(req,res){
    const {id}=req.params;
    const card= await cardModel.findById(id);
    return res.status(200).json({card});
  }



};

module.exports = new CardControllers();
