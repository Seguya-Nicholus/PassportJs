// Require packages
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // Options for the google strategy
}), ()=>{
    // Passport callback function
})