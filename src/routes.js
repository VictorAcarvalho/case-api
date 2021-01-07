const userControllers = require('./app/controllers/userControllers');
const routes = require('express').Router();

    routes.post('/user',userControllers.store);
    routes.post('/login',userControllers.auth);
    //JWT
    routes.post('/card',cardControllers.storeCard);





module.exports = routes;
