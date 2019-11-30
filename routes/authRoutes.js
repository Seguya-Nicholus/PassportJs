// Require Packages
const express = require('express');
const router = express.Router();

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
router.get('/google', (req, res)=>{
    // Handle with passport
    res.send('Logging in with Google')
})

module.exports = router;