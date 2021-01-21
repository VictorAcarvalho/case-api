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

    //Atualiza o saldo
    routes.put('/userbalance',userControllers.storeBalance);

    //Mostra o saldo
    routes.get('/balance',userControllers.showBalance);


                               //Endpoints do cartão físico

    //cadastrar cartão
    routes.post('/card',cardControllers.store);

    //Lista os cartões
    routes.get('/card',cardControllers.list);

    //Lista um único cartão
    routes.get('/card/:id',cardControllers.show)

    //Lista um unico cartão e a ultima transação
    routes.get('/cardlast/:id',cardControllers.showCardandTransition);

    //Atualiza o  cartão
    routes.put('/card/:id',cardControllers.update);

    //Soft delete
    routes.put('/delete/:id',cardControllers.softDelete);


                                //Endpoints das transações

    //Cria uma nova operação
    routes.post('/operations',operationControllers.store);
    //Lista as operações do cartão
    routes.get('/operations/:card',operationControllers.list);
    //Lista apenas uma operação
    routes.get('/showoperations/:id',operationControllers.show);
    //Lista a ultima operação
    routes.get('/last',operationControllers.showLastOperation);


module.exports = routes;
