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
    //Atualiza o saldo
    routes.put('/user',userControllers.storeBalance);
    //json web token
    routes.use(JWT);


                               //Endpoints do cartão físico

    //cadastrar cartão
    routes.post('/card',cardControllers.store);

    //Lista os cartões
    routes.get('/card',cardControllers.list);

    //Atualiza o  cartão
    routes.put('/card/:id',cardControllers.update);

    //Soft delete
    routes.put('/delete/:id',cardControllers.softDelete);


                                //Endpoints das transações

    //Cria uma nova operação passando o id do cartão como parametro
    routes.post('/operations/:card',operationControllers.store);
    //Lista as operações do cartão
    routes.get('/operations/:card',operationControllers.list);
    //Lista apenas uma operação
    routes.get('/showoperations/:id',operationControllers.show);


module.exports = routes;
