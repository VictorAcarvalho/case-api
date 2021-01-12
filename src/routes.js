const userControllers = require('./app/controllers/userControllers');
const cardControllers = require('./app/controllers/cardControllers');
const JWT = require('./app/middleware/auth');
const routes = require('express').Router();
    //Funcionalidades Usuário
    //cadastra usuário
    routes.post('/user',userControllers.store);
    //autentifica o login do usuário
    routes.post('/login',userControllers.auth);
    //json web token
    routes.use(JWT);

    //Funcionalidades do cartão

    //cadastrar cartão
    routes.post('/card',cardControllers.storeCard);
    //Lista os cartões
    routes.get('/card',cardControllers.list);


module.exports = routes;
