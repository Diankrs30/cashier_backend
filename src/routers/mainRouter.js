// import express
const express = require("express");

// import subrouter
const userRouter = require("./userRouter");
const transactionRouter = require("./transactionRouter");

// membuat router
const mainRouter = express.Router();

// membuat prefix
const prefix = "/cashier";

// connection subrouter to mainrouter
mainRouter.use(`${prefix}/users`, userRouter);
mainRouter.use(`${prefix}/transaction`, transactionRouter);

// membuat http route
mainRouter.get("/", (req, res) => {
  // mengirim respon ke client
  res.json({
    msg: "Welcome",
  });
});

// export router
module.exports = mainRouter;
