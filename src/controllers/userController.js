const userRepo = require("../repo/userRepo");
const response = require("../helpers/response");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const result = await userRepo.getAllUsers();
      return response(res, {
        status: 200,
        data: result.rows,
        message: "Get all users success",
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

module.exports = userController;
