const userControllers = require('./app/controllers/userControllers');
const routes = require('express').Router();

    routes.post('/user',userControllers.store);
    routes.post('/login',userControllers.auth);
    routes.get('/users',userControllers.show);
module.exports = routes;
