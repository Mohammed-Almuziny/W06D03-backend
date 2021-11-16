const express = require("express");

const { sginIn } = require("../controllers/account");

const accountRouter = express.Router();

accountRouter.get("/sginin", sginIn);

module.exports = accountRouter;
