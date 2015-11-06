// Require the Express module
// https://npmjs.com/package/express
var express = require('express');

// Create a new application instance
var app = express();

// Use Express's built-in static file server
app.use(express.static('public'));


// TODO: Create a Counter constructor function that allows you to record votes
//       for puppies and kittens.
//
//       You will use this like so:
//       var counter = new Counter();
//
//       // Then, in your route to record votes for kittens:
//       counter.record('kittens');
//
//       // Votes for puppies
//       counter.record('puppies');
//
//       // Then retrieve the value like:
//       counter.retrieve('kittens');
//       counter.retrieve('puppies');


// TODO: Respond to /kittens and /puppies requests.

// Listen on port 8080 for Cloud9
// https://docs.c9.io/docs/run-an-application#section-environment-variables
app.listen(8080);

// Log a message to the console.
console.log("Server is up!");