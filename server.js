// Require the Express module (https://npmjs.com/package/express)
var express = require('express');

// Create a new express application instance by calling `express()`
express();

// Serve files in the 'public' directory with Express's built-in static file server


// Create a Counter class that will be used to create counter objects
// See the full description in README.md
var counter = require('./counter.js');

// Create a new Counter instance, like: `var voteCounter = new Counter()`
var voteCounter = new Counter();

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."


// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."


// Have the Express application listen for incoming requests on port 8080
