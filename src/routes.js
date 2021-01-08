const userControllers = require('./app/controllers/userControllers');
const cardControllers = require('./app/controllers/userControllers');
const JWT = require('./app/middleware/auth');
const routes = require('express').Router();
    //cadastra usuário
    routes.post('/user',userControllers.store);
    //autentifica o login do usuário
    routes.post('/login',userControllers.auth);
    //json web token
    routes.use(JWT);
    //cadastrar cartão
    routes.post('/card',cardControllers.storeCard);


module.exports = routes;
