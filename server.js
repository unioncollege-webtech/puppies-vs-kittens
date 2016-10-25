// Require the Express module (https://npmjs.com/package/express)
var express = require('express');

// Create a new express application instance by calling `express()`
var server = express();

// Serve files in the 'public' directory with Express's built-in static file server
server.use(express.static('public'));

// Create a Counter class that will be used to create counter objects
// See the full description in README.md
var ScoreCounter = require('./counter.js');

// Create a new Counter instance, like: `var ScoreCounter = new Counter()`
var ScoreCounter = new ScoreCounter();

//Main page

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."

server.get('/kittens', function (req, res) {
  ScoreCounter.record('kittens');
  var kittenScore = ScoreCounter.retrieve('kittens');
  var puppyScore = ScoreCounter.retrieve('puppies');
  console.log('Vote for puppies from: \"' + req.connection.remoteAddress + '\", now: ' + kittenScore + ' kittens v ' + puppyScore + ' puppies!')
  res.send('Thank you for voting! Kittens now have ' + kittenScore + ' total votes so far.');
});

// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."
server.get('/puppies', function (req, res) {
  ScoreCounter.record('puppies');
  var kittenScore = ScoreCounter.retrieve('kittens');
  var puppyScore = ScoreCounter.retrieve('puppies');
  console.log('Vote for puppies from: \"' + req.connection.remoteAddress + '\", now: ' + kittenScore + ' kittens v ' + puppyScore + ' puppies!')
  res.send('Thank you for voting! Kittens now have ' + puppyScore + ' total votes so far.')
});

// Have the Express application listen for incoming requests on port 8080
server.listen(8080, function() {
  console.log('Puppies v Kittens server listening on port 8080.');
});
