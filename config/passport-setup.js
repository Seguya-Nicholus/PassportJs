// Require packages
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys')
const User = require('../modals/userModal')

passport.use(
    new GoogleStrategy({
        // Options for the google strategy
        callbackURL:'/auth/google/redirect', 
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken,profile,done)=>{
    // Passport callback function
    console.log('Passport callback function fired')
    console.log(profile)
    new User({
        username:profile.displayName,
        googleId:profile.id
    }).save().then((newUser)=>{
        console.log('New User Created : ' + newUser);        
    })
})
) 