// Require Packages
const express = require('express')

// Create our Express Application
const app = express();

// Set view Engine
app.set('view engine','ejs');


// Creating the Home Route
app.get('/', (req, res)=>{
    res.render('home')
})

// Make the Express Application listen on a certain port
app.listen(3000, ()=>{
    console.log('App now Listening for requests on port 3000')
})