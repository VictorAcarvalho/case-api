const operationModel = require('../models/operationsModel');
const userModel = require('../models/userModel');
const {format} = require ('date-fns')
class OperationControllers {

  async store(req,res){

    const {card} = req.params
    const {value,type,establishment} =req.body
    const operatorObject ={
        card,
        date: format(new Date(),'HH:mm'),
        value,
        type,
        establishment,
        hour: format(new Date(),'dd-MM-yyyy'),
      }
      const {balance} = await userModel.findById(req.id);
      if(type === 'debit'){
         operatorObject.value - balance;
      }
    const createOperation = await operationModel.create(operatorObject);
    return res.status(201).json({createOperation});
};


//Lista as transações do cartão
async list (req,res){

  const {card} = req.params;

  const listOperation = await operationModel.find({card});
  return res.status(200).json({listOperation});
};

async show (req,res){
  const {id} =req.params
  const listOperation = await operationModel.findById(id);
  return res.status(200).json({listOperation});
};

};

module.exports = new OperationControllers();
