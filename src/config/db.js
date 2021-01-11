const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
})


module.exports= mongoose;
