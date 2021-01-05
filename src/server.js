require('dotenv').config();
const express = require('express');
const app = express();
//const router = require('*');
app.use(express.json());


const port = process.env.PORT || 3008

app.listen(port,()=> console.log(`Api rondando na porta ${port}` ));