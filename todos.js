const express = require('express');
const router = express.Router();

let todos = [
  { "id": 1, "ENG": "Turkey", "TR": "Türkiye", "categoryId": 1 }
];

router.get('/todos', (req, res) => {
  res.json(todos);
});

router.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json(newTodo);
});

router.put('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;

  todos = todos.map(todo => {
    if (todo.id === parseInt(todoId)) {
      return { ...todo, ...updatedTodo };
    }
    return todo;
  });

  res.json(updatedTodo);
});

router.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;

  todos = todos.filter(todo => todo.id !== parseInt(todoId));

  res.sendStatus(200);
});

module.exports = router;
