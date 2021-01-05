const userModel = require('../../config/models/userModel');

class UserControllers{

    async store(req,res){
        const user = await userModel.create(req.body);
        return res.status(201).json({user});
    };


};

module.exports= new UserControllers();