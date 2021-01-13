const { restart } = require('nodemon');
const operationModel = require('../models/operations');

class OperationControllers {

  async store(req,res){

    const createOperation = await operationModel.create(req.body);
    return res.status(201).json({createOperation});

  };


}

module.exports = new OperationControllers();
