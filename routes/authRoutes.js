// Require Packages
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Auth login
router.get('/login', (req, res)=>{
    res.render('login')
});

// Auth logout
router.get('/logout', (req, res)=>{
    // Handle with passport
    res.send('Logging Out')
})


// Auth with google
router.get('/google', passport.authenticate('google', {
    scope:['profile']
}));


// Callback route for google to rediect to
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.send('You reached the callback URL')
})

module.exports = router;