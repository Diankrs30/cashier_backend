const postgreDb = require("../config/postgre");

const getAllUsers = () => {
  let query = "select * from users";

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

const userRepo = {
  getAllUsers,
};

module.exports = userRepo;
