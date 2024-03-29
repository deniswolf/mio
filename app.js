/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path')
    , config = require('./.config.json')
    , passportFacebook = require('./fb');

var app = express();

var FACEBOOK = config.auth.FACEBOOK;
var passport = passportFacebook(FACEBOOK, function authCallback(accessToken, refreshToken, profile, done) {
    console.log('MIO: LOG: inside FB callback with tokens etc');
    done(null, profile);
});

// TODO: something with user
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);


// setup FACEBOOK authentication
app.get('/auth/facebook', passport.authenticate('facebook', {scope: FACEBOOK.PERMISSIONS}));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook',
        {
            failureRedirect: '/#fb_login_failed',
            successRedirect: '/'
        }
    )
);


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
