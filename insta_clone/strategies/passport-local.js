var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').user;

function processSignupCallback(req, email, password, done) {
    User.findOne({
        where: {
            'email': email
        },
        attributes: ['id']
    })
    .then(function(user) {
        if(user) {
            return done(null, false);
        } else {
            var userToCreate = req.body;

            User.create(userToCreate)
            .then(function(createdRecord) {
                createdRecord.password = undefined;
                return done(null, createdRecord);
            })
        }
    });
}

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    })
    
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, processSignupCallback));
    
};