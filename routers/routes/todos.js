const express = require("express");

const { getTodos } = require("../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/getTodos/:userName", getTodos);

module.exports = todosRouter;
