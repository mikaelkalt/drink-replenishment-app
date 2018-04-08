const express = require("express");
const cors = require("cors");
//require('express-async-errors');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const Configuration = require("./api/config/Configuration");

const configuration = new Configuration();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Add headers
app.use(cors());

const routes = require("./api/routes/routes"); //importing route
routes(app, configuration); //register the route

app.listen(port);
configuration.logger.info("Orders Server RESTful API started on: %d", port);