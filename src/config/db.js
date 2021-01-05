const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contaSimples-Crescere',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})


module.exports= mongoose;