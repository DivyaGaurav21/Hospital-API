const express = require('express');
const app = express();

const port = 8000;

// -----------DB Connection---------------------------//
const db = require('./config/mongoose')


// ----------passport and passport-jwt---------------//
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-Strategy');


// -------------for reading form data---------------//
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if (err) {
        console.log(`error in running on port`, err);
    } else {
        console.log(`yeah ! Server is running on port ${port}`);
    }
})


