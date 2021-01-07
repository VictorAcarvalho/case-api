const cardModels = require('../../config/models/cardModel');
class CardControllers{

  async store(req,res){
    const userCard = await cardModels.create(req.body);
    return res.status(201).json({userCard});
  }

}

module.exports = new CardControllers();
