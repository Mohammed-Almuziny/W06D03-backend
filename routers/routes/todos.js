const express = require("express");

const { getTodos, addTodos } = require("../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/getTodos/:userName", getTodos);
todosRouter.post("/addTodos/:userName/:todo", addTodos);

module.exports = todosRouter;
