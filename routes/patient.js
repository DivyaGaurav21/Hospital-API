const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient_controller');
const patient = require('../models/Patient');
const passport = require('passport');

//-----------Creating route for patient Controller--------------------//

//---------------------for register patient--------------------------//
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.create)


module.exports = router;