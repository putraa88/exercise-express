const routes = require('express').Router();

routes.use('/users', require('./user.route'));
routes.use('/products', require('./product.route'));

module.exports = routes;