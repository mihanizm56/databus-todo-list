const express = require('express');
const {
  createTodoController,
  removeTodoController,
  updateTodoController,
  getTodosController,
} = require('../../controllers/todo');

const todosRouter = express.Router();

todosRouter.get('/', getTodosController);
todosRouter.post('/', createTodoController);
todosRouter.put('/', updateTodoController);
todosRouter.delete('/', removeTodoController);

module.exports.todosRouter = todosRouter;
