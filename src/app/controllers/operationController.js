const operationModel = require('../models/operationsModel');
const cardModel = require('../models/cardModel.js');
const {format} = require ('date-fns')
class OperationControllers {

  async store(req,res){
    const {number} = req.body;
    const cardId = await cardModel.findOne({number});

    if(!cardId){
      return res.status(401).json({error:'Cartão '})
    }
    const {_id:id} = cardId;
    req.body.card = id;
    req.body.date = format(new Date(),'dd-MM-yyyy');
    req.body.hour = format(new Date(), 'HH:mm:ss')
    const createOperation = await operationModel.create(req.body);
    return res.status(201).json({createOperation});
};

async list (req,res){
  const {number} = req.body;
    const cardId = await cardModel.findOne({number});

    if(!cardId){
      return res.status(401).json({error:'Cartão '})
    }
    const {_id:id} = cardId;

  const listOperation = await operationModel.find({id});
  return res.status(200).json({listOperation});
};

async show (req,res){
  const {id} =req.params
  const listOperation = await operationModel.findOne({id});
  return res.status(200).json({listOperation});
}

}

module.exports = new OperationControllers();
