/* eslint-disable no-console */
const { v4 } = require('uuid');

let todos = [];

const createTodoController = (req, res) => {
  // console.log('createTodoController goes');

  todos.push({
    text: req.body.text,
    id: v4(),
  });

  res.status(200).json({
    error: false,
    errorText: '',
    data: { todos },
    additionalErrors: null,
  });
};

const removeTodoController = (req, res) => {
  // console.log('removeTodoController goes');

  todos = todos.filter(todo => todo.id !== req.body.id);

  res.status(200).json({
    error: false,
    errorText: '',
    data: { todos },
    additionalErrors: null,
  });
};

const updateTodoController = (req, res) => {
  // console.log('updateTodoController goes');

  todos = todos.map(todo => {
    if (todo.id === req.body.id) {
      return { ...req.body };
    }

    return todo;
  });

  res.status(200).json({
    error: false,
    errorText: '',
    data: { todos },
    additionalErrors: null,
  });
};

const getTodosController = (req, res) => {
  // console.log('getTodosController goes');

  res.status(200).json({
    error: false,
    errorText: '',
    data: { todos },
    additionalErrors: null,
  });
};

module.exports = {
  createTodoController,
  removeTodoController,
  updateTodoController,
  getTodosController,
};
