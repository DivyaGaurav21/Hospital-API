const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const Doctor = require('../models/Doctor');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "your-secret-key"
};


//JWT authentication
passport.use(new JwtStrategy(jwtOptions, function (jwtPayLoad, done) {

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