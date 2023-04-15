const route = require('express').Router();

// import controller
const userController = require('../controllers/user.controller');

// this endpoint will get all the students data
route.get('/', userController.getAllUsers);

// this endpoint will get specific user data (by name)
route.get('/:id', userController.getUser);

// this endpoint will create new users
route.post('/', userController.addNewUser);

module.exports = route;