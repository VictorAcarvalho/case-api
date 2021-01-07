require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./helper/logger');
const router = require('./routes');
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(express.json());
app.use(router);
app.use((req,res,error,next)=>{
  logger.error(error);
      return logger.info(error)
});


const port = process.env.PORT || 3008

app.listen(port,()=> logger.info(`Api rondando na porta ${port}`));
