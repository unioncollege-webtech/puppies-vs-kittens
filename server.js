var express = require('express');

// Create a new application instance
var app = express();

// Use Express's built-in static file server
app.use(express.static('public'));

// Also respond to `GET` requests at the path '/hi'
app.get('/kittens', function(req, res){
   res.send('Thanks for voting for kittens'); 
});

// Also respond to `GET` requests at the path '/hi'
app.get('/puppies', function(req, res){
   res.send('Thanks for voting for puppies'); 


// Listen on port 8080 for Cloud9
// https://docs.c9.io/docs/run-an-application#section-environment-variables
app.listen(8080);

//Log a message to the console.
console.log("Server is up!");


