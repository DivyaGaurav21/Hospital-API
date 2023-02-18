const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient_controller');
const patient = require('../models/Patient');
const passport = require('passport');

// -------------------route for create patient for authorized doctor-----------------//
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.create)

// ---------------------router for access all report---------------------------------//
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientController.allReports);


// -----------------create report for patient(patient_id) ----------------------------//
router.post("/:id/create-report", passport.authenticate('jwt', { session: false }), patientController.createReport);


module.exports = router;