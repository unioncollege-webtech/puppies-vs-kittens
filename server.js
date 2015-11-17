// Require the Express module (https://npmjs.com/package/express)
var express = require('express');

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));

// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// Counter constructor definition
function Counter() {
  this.store = {
    kittens: 0,
    puppies: 0
  }
    // Create a property on the `this` reference to store counts for each key
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
  this.store[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
  return this.store[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
  return this.store;
};

// Create a new counter instance
var voteCounter = new Counter();

// Respond to 'get' requests for the route '/kittens'
app.get('/kittens', function(req, res){
  voteCounter.record('kittens');
  res.send('Thank you for voting! Kittens have ' + voteCounter.retrieve('kittens') + ' total votes so far!');
})

// Respond to 'get' requests for the route '/puppies'
app.get('/puppies', function(req, res){
  voteCounter.record('puppies');
  res.send('Thank you for voting! Puppies have ' + voteCounter.retrieve('puppies') + ' total votes so far!');
})

// Have the Express application listen for incoming requests on port 8080
app.listen(8080);
