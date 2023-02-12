const express = require('express');

const router = express.Router();

console.log('router is loaded');

//----------to handle all routes of /doctors url----------------//
router.use('/doctors', require('./doctor'));

module.exports = router;