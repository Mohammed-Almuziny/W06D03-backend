const express = require("express");

const { sginIn, logIn } = require("../controllers/account");

const accountRouter = express.Router();

accountRouter.post("/sginin", sginIn);
accountRouter.get("/login", logIn);

module.exports = accountRouter;
