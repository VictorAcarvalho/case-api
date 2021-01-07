const userModel = require('../../config/models/userModel');
const bcrypt = require('bcryptjs');

class UserControllers{

    async store(req,res){
        const {email} = req.body
        const user = await userModel.findOne({email});
        if(!user){
           const userFinal = await userModel.create(req.body);
           return res.status(201).json({userFinal});
        }
        return res.status(401).json({msg:"Email já cadastrado"});
    };

     async show(req,res){
       const user = await userModel.find();
       return res.status(200).json({user});
     }

    async auth(req,res){
      const {email,password} = req.body;
      const user = await userModel.findOne({email}).select('password');
      if(!user){
        return res.status(401).json({msg:"Email ou senha inválida"});
      }
      await bcrypt.compare(password, user.password);
      if(!password){
        return res.status(401).json({msg:"Email ou senha inválida"});
      }
      return res.status(200).json({msg:"Usuário logado com sucesso"});

    }



};

module.exports= new UserControllers();
