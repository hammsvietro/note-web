const routes = require('express').Router();

const SessionController = require('./app/controllers/SessionController');

//Routes definiton

routes.post('/sessions', SessionController.store);

module.exports = routes;