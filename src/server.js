require('dotenv').config();
const express = require('express');
const Youch = require('youch');
const logger = require('./helper/logger');
const router = require('./routes');
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(router);
app.use(async (error, req, res) => {
  if (error) {
    const errors = await new Youch(error, req).toJSON();
    logger.error(JSON.stringify(errors));
    if (process.env.NODE_ENV !== 'production') {
      return res.status(500).json({ errors });
    }
    return res.status(500).json({ error: 'Houve um erro interno na API' });
  }
});

const port = process.env.PORT || 3008

app.listen(port,()=> logger.info(`Api rondando na porta ${port}`));
