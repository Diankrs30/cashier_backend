const postgreDb = require("../config/postgre");

const getAllTransactions = () => {
  let query = "select * from transactions";

  return new Promise((resolve, reject) => {
    postgreDb.query(query, (error, result) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve(result);
    });
  });
};

const getTransactionByUser = (userId) => {
  let query = "select * from transactions where userid = $1";

  return new Promise((resolve, reject) => {
    postgreDb.query(query, [userId], (error, result) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve(result);
    });
  });
};

const createTransaction = (body) => {
  return new Promise((resolve, reject) => {
    const query =
      "insert into transactions (userid, total) values ($1, $2) returning id";

    const { userid, total } = body;
    postgreDb.query(query, [userid, total], (error, result) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve(result);
    });
  });
};

const transactionRepo = {
  getAllTransactions,
  getTransactionByUser,
  createTransaction,
};

module.exports = transactionRepo;
