const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
// const port = 80 ; // directly runs by typing 'localhost'
const port = 8000 ;  // in this we have to exclusively mention port 8000

// EXPRESS SPECIFIC STUFF
// app.use(express.static('static', options))
app.use('/static',express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views' , path.join(__dirname + '  ')) // Set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PubG is the best game',"content":con}
    const params = {  }
    res.status(200).render('index.pug',params)
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})