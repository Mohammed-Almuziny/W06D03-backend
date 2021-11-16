const express = require("express");

const { sginIn } = require("../controllers/account");

const accountRouter = express.Router();

accountRouter.post("/sginin", sginIn);

module.exports = accountRouter;
