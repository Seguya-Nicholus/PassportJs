// Require Packages
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')


// Create our Express Application
const app = express();

// Set view Engine
app.set('view engine','ejs');

// Connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
    console.log('Database Connection Successful');
})


// Importing of Routes
const auth_Routes = require("./routes/authRoutes"); 
const passportSetup = require('./config/passport-setup')
app.use('/auth', auth_Routes);



// Creating the Home Route
app.get('/', (req, res)=>{
    res.render('home')
})

// Make the Express Application listen on a certain port
app.listen(3000, ()=>{
    console.log('App now Listening for requests on port 3000')
})