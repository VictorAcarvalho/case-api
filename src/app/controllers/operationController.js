const operationModel = require('../models/operationsModel');
const userModel = require('../models/userModel');
const yup = require('yup');
const {format} = require ('date-fns')

class OperationControllers {

  async store(req,res){

    const operationMask = yup.object().shape({
      value:yup.number().integer().required(),
      type:yup.string().required(),
      stablishment:yup.string().required()
    });
    const operatioValidation = operationMask.isValid(req.body);
    if(!operatioValidation){
      return res.status(400).json({error:'Dados inválidos'})
    }

    const {card} = req.params
    const {value,type,establishment} =req.body
    const operatorObject ={
        card,
        date: format(new Date(),'dd-MM-yyyy'),
        value,
        type,
        establishment,
        hour: format(new Date(),'HH:mm'),
      }
      const userBalance = await userModel.findById(req.id);
      const{balance} = userBalance;
      if(type === 'debit'){
         const transation= balance - operatorObject.value;
         req.body.balance = transation;
         await userModel.findByIdAndUpdate(req.id,req.body);
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
