const userControllers = require('./app/controllers/userControllers');
const cardControllers = require('./app/controllers/userControllers');
const JWT = require('./app/middleware/auth');
const routes = require('express').Router();

    routes.post('/user',userControllers.store);
    routes.post('/login',userControllers.auth);
    routes.use(JWT);
    //cadastrar cartão
    routes.post('/card',cardControllers.storeCard);





module.exports = routes;
