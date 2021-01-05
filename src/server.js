require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');
const morgan = require('morgan');
app.use(express.json());
app.use(router);
app.use(morgan('tiny'));


const port = process.env.PORT || 3008

app.listen(port,()=> console.log(`Api rondando na porta ${port}`));