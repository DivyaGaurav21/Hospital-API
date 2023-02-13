const express = require("express");
const route = express.Router();
const reportsController = require("../controllers/report_controller");

route.get("/:status", reportsController.status);

module.exports = route;