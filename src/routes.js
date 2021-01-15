const userControllers = require('./app/controllers/userControllers');
const cardControllers = require('./app/controllers/cardControllers');
const operationControllers = require('./app/controllers/operationController');
const digitalCardControllers = require('./app/controllers/digitalControllers');
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
    routes.post('/card',cardControllers.storeCard);

    //Lista os cartões
    routes.get('/card',cardControllers.list);

    //Atualiza o  cartão
    routes.put('/card/:id',cardControllers.update);

    //Soft delete
    routes.put('/cardDelete/:id',cardControllers.softDelete);

                               //Endpoints catão digital

    //cadastrar catão digital
    routes.post('/digitalcard',digitalCardControllers.store);

    //listar todos os cartões digitais
    routes.get('/digitalcard',digitalCardControllers.list);

    //Atualizar um cartão digital
    routes.put('/digitalcard',digitalCardControllers.update);

    //Soft delete
    routes.put('/digitalcard',digitalCardControllers.softDelete);


                                //Endpoints das transações

    //Cria uma nova operação passando o id do cartão como parametro
    routes.post('/operations',operationControllers.store);
    //Lista as operações do cartão
    routes.get('/operations/:card',operationControllers.list);
    //Lista apenas uma operação
    routes.get('/operations/:id',operationControllers.show);


module.exports = routes;
