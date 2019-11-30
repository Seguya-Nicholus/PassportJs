// Require packages
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // Options for the google strategy
        clientID:'667815717558-eiemd8t13c8cjs8naidb8u5qggdc6n46.apps.googleusercontent.com',
        clientSecret:'4waREV35BwYQIwL1eutYLyoG'
}), ()=>{
    // Passport callback function
})