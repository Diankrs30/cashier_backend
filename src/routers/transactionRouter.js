const express = require("express");
const transactionRouter = express.Router();
const {
  getAllTransactions,
  getTransactionByUser,
  create,
} = require("../controllers/transactionController");

transactionRouter.get("/", getAllTransactions);
transactionRouter.get("/transaction-by-user/:userid", getTransactionByUser);
transactionRouter.post("/create-transaction/", create);

module.exports = transactionRouter;
