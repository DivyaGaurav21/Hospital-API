const express = require("express");
const route = express.Router();
const reportsController = require("../controllers/report_controller");

// ------------get all the status of any patient-----------------//
route.get("/:status", reportsController.status);

module.exports = route;