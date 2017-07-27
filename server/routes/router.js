const router = require('express').Router();
const controller = require('../controller/controller');
const sequelize = require('sequelize');

router.post('/todos', controller.addTodo);
router.get('/todos', controller.getTodos);
router.delete('/todos/:todoid', controller.deleteTodo);

module.exports = router;