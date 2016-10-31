// Require the Express module (https://npmjs.com/package/express)
var express = require('express');

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));

// Create a Counter class that will be used to create counter objects
// See the full description in README.md
var Counter = require('./test/counter.js');

// Create a new Counter instance, like: `var voteCounter = new Counter()`
var counter = new Counter();

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."
app.get('/kittens', function (req, res) {
    counter.record('kittens');
    var kscore = counter.retrieve('kittens');
    res.send("Thank you for voting! Kittens have " + kscore + " total votes so far.");
})

// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."
app.get('/puppies', function (req, res) {
    counter.record('puppies');
    var pscore = counter.retrieve('puppies');
    res.send("Thank you for voting! Puppies have " + pscore + " total votes so far.");
})

// Have the Express application listen for incoming requests on port 8080
app.listen(8080);
console.log('server is up');