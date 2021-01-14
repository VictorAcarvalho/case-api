const operationModel = require('../models/operationsModel');
const {format} = require ('date-fns')
class OperationControllers {

  async store(req,res){
    const {card} =req.params;
    req.body.card = card;
    req.body.date = format(new Date(),'dd-MM-yyyy-');
    req.body.hour = format(new Date(), 'HH:mm:ss')
    const createOperation = await operationModel.create(req.body);
    return res.status(201).json({createOperation});
};

async list (req,res){
  const {card} =req.params
  const listOperation = await operationModel.find({card});
  return res.status(200).json({listOperation});
};

async show (req,res){
  const {id} =req.params
  const listOperation = await operationModel.findOne({id});
  return res.status(200).json({listOperation});
}

}

module.exports = new OperationControllers();
