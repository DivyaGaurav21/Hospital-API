const express = require('express');

const router = express.Router();

console.log('router is loaded');

router.get('/', (req, res) => {
    res.send('all ohk :) check API by PostMan');
})

//----------to handle all routes of /doctors url----------------//
router.use('/doctors', require('./doctor'));

//-----------to handle all routes od /patient url--------------//
router.use('/patients', require('./patient'));

//----------to handle all routes od /report url---------------//
router.use('/report', require('./report'));

module.exports = router;