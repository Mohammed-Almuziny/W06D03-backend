const express = require("express");

const { getTodos } = require("../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/", getTodos);

module.exports = todosRouter;
