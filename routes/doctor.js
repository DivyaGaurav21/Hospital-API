const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctor_controller');

// ----------------router for register action------------------//
router.post('/register', doctorController.register);


// -----------------route for login action--------------------//
router.post('/login', doctorController.login);



module.exports = router;