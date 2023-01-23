const express = require("express");
const userRouter = express.Router();
const { getAllUsers } = require("../controllers/userController");

userRouter.get("/", getAllUsers);

module.exports = userRouter;
