const operationModel = require('../models/operationsModel');
const userModel = require('../models/userModel');
const cardModel = require('../models/cardModel');
const mongoose = require('mongoose');
const yup = require('yup');
const {format} = require ('date-fns');
const { findOne } = require('../models/cardModel');

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


    const {value,type,establishment,card} =req.body;
    const findCard = await cardModel.findOne({number:card});
    if(!findCard){
      return res.status(400).json({error:'cartão não encontrado'});
    }
    const {id} = findCard;
    const operatorObject ={
        card:id,
        cardId: id,
        date: format(new Date(),'dd-MM-yyyy'),
        value,
        type,
        establishment,
        hour: format(new Date(),'HH:mm'),
        user:req.id
      }

      const userBalance = await userModel.findById(req.id);
      const{balance} = userBalance;
      if(type === 'debito'){
         const transation= balance - operatorObject.value;
         req.body.balance = transation;
         await userModel.findByIdAndUpdate(req.id,req.body);
      }
    const createOperation = await operationModel.create(operatorObject);
    const lastOperation = await cardModel.findOneAndUpdate({number:card},{lastOperation:createOperation});
    return res.status(201).json({createOperation});
};


//Lista as transações do cartão
async list (req,res){
   const listOperation = await operationModel.find({user:req.id}).sort({createdAt: -1});
  return res.status(200).json(listOperation);
};

async show (req,res){
  const {id} =req.params;
  const listOperation = await operationModel.findById(id);
  return res.status(200).json({listOperation});
};

//Lista a ultima transação

async showLastOperation(req,res){

  const lastOperation = await operationModel.find({user:req.id}).sort({createdAt: -1 }).limit(1);
  return res.status(200).json({lastOperation});

}


};

module.exports = new OperationControllers();
