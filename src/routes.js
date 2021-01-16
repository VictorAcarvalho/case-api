const userControllers = require('./app/controllers/userControllers');
const cardControllers = require('./app/controllers/cardControllers');
const operationControllers = require('./app/controllers/operationController');
const JWT = require('./app/middleware/auth');
const routes = require('express').Router();
                                //Endpoints Usuário

    //cadastra usuário
    routes.post('/user',userControllers.store);

    //autentifica o login do usuário
    routes.post('/login',userControllers.auth);
    //json web token
    routes.use(JWT);


                               //Endpoints do cartão físico

    //cadastrar cartão
    routes.post('/card',cardControllers.store);

    //Lista os cartões
    routes.get('/card',cardControllers.list);

    //Atualiza o  cartão
    routes.put('/card',cardControllers.update);

    //Soft delete
    routes.put('/card/:id',cardControllers.softDelete);


                                //Endpoints das transações

    //Cria uma nova operação passando o id do cartão como parametro
    routes.post('/operations',operationControllers.store);
    //Lista as operações do cartão
    routes.get('/operations/:card',operationControllers.list);
    //Lista apenas uma operação
    routes.get('/operations/:id',operationControllers.show);


module.exports = routes;
