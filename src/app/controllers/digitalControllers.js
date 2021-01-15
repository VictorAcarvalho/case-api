const cardModel = require('../models/cardModel');
const digitalCardModel = require('../models/digitalCard');

class digitalCardController {


async store(req,res){
  const generatorCard = Math.floor(Math.random()*(10000-1000) + 1000 );

  req.body.number = generatorCard;
  req.body.user = req.id
  const digitalCard = await digitalCardModel.create(req.body);
  res.status(201).json({digitalCard});
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
};

//Soft delete
async softDelete(req,res){
req.body.user=req.id;
req.body.active = false;
const {number} = req.body
const userCards = await cardModel.findOneAndUpdate(number,req.body);
return res.status(200).json({userCards});
};


}

module.exports= new digitalCardController ();
