const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/Doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}


//JWT authentication
passport.use(new JWTStrategy(opts, function (jwtPayLoad, done) {

    Doctor.findById(jwtPayLoad._id, function (err, user) {
        if (err) { console.log('Error in finding user from JWT'); return; }

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })

}));

module.exports = passport;