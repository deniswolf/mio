var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;

// function to init and return auth passport object
function init(FACEBOOK, callback) {
    passport.use(new FacebookStrategy({
            clientID: FACEBOOK.APP_ID,
            clientSecret: FACEBOOK.APP_SECRET,
            callbackURL: FACEBOOK.CALLBACK_URL
        },
        function (accessToken, refreshToken, profile, done) {
            callback(accessToken, refreshToken, profile, done);
        }
    ));

    return passport;
}

module.exports = init;
