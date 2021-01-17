const operationModel = require('../models/operationsModel');
const cardModel = require('../models/cardModel.js');
const {format} = require ('date-fns')
class OperationControllers {

  async store(req,res){
    const {id} = req.params;
    const cardId = await cardModel.findById(id);

    if(!cardId){
      return res.status(401).json({error:'Cartão não encontrado '});
    };
    const {id} = cardId;
    const {value,type,establishment} =req.body
    const operatorObject ={
        card:id,
        date: format(new Date(),'HH:mm'),
        value,
        type,
        establishment,
        hour: format(new Date(),'dd-MM-yyyy'),

    }
    const createOperation = await operationModel.create(operatorObject);
    return res.status(201).json({createOperation});
};

async list (req,res){
    const {id} = req.params;
   const cardId = await cardModel.findById(id);

  if(!cardId){
    return res.status(401).json({error:'Cartão não encontrado '});
  };


  const {id} = cardId;

  const listOperation = await operationModel.find({id});
  return res.status(200).json({listOperation});
};

async show (req,res){
  const {id} =req.params
  const listOperation = await operationModel.findOne({id});
  return res.status(200).json({listOperation});
};

};

module.exports = new OperationControllers();
