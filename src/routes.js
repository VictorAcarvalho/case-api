const userControllers = require('./app/controllers/userControllers');
const cardControllers = require('./app/controllers/cardControllers');
const operationControllers = require('./app/controllers/operationController')
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
    //Atualiza o  cartão
    routes.put('/card/:id',cardControllers.update);
    //Soft delete
    routes.put('/card/:id',cardControllers.softDelete);

    //Funcionalidades das transações
    routes.post('/operations/:card',operationControllers.store);


module.exports = routes;
