const transactionRepo = require("../repo/transactionRepo");
const response = require("../helpers/response");

const transactionController = {
  getAllTransactions: async (req, res) => {
    try {
      const result = await transactionRepo.getAllTransactions();
      return response(res, {
        status: 200,
        data: result.rows,
        message: "Get all transactions success",
      });
    } catch (error) {
      return response(res, {
        error,
        status: 500,
        message: "Internal server error",
      });
    }
  },

  getTransactionByUser: async (req, res) => {
    try {
      const userId = req.params.userid;
      const result = await transactionRepo.getTransactionByUser(userId);
      return response(res, {
        status: 200,
        data: result.rows,
        message: "Get transaction by user success",
      });
    } catch (error) {
      return response(res, {
        error,
        status: 500,
        message: "Internal server error",
      });
    }
  },

  create: async (req, res) => {
    try {
      const body = req.body;
      const result = await transactionRepo.createTransaction(body);

      const data = {
        id: result.rows[0].id,
        userId: body.userid,
        total: body.total,
      };
      return response(res, {
        status: 200,
        data: data,
        message: "Create success",
      });
    } catch (error) {
      return response(res, {
        error,
        status: 500,
        message: "Internal server error",
      });
    }
  },
};

module.exports = transactionController;
