const userControllers = require('./app/controllers/userControllers');
const routes = require('express').Router();

    routes.post('/user',userControllers.store);

module.exports = routes;