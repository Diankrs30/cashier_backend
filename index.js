require("dotenv").config();

const express = require("express");
const postgreDb = require("./src/config/postgre");
const server = express();
const mainRouter = require("./src/routers/mainRouter");

const PORT = 8000;
const morgan = require("morgan");
const logger = morgan(
  ":method :url :status :res[content-length] - :response-time ms"
);
const cors = require("cors");
const corsOptions = {
  origin: "*",
};

postgreDb
  .connect()
  .then(() => {
    console.log("DB Connected");

    server.use(cors(corsOptions));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
    server.use(logger);
    server.use(mainRouter);
  })
  .catch((error) => {
    console.log(error);
  });
