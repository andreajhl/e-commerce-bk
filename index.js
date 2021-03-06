
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./src/configDB/config");

const app = express();

dbConnection();

const routes = require("./src/routes/index");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.use("/", routes);

const port= process.env.PORT || 4000

app.listen(port, () => {
  console.log("Servidor corriento en el puerto 4000");
});