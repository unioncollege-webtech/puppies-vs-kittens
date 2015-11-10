// Require the Express module (https://npmjs.com/package/express)
var express = require("express");

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));

// Create a Counter class that will be used to create counter objects
// See the full description in README.md


function Counter() {
    this.pet = {
        puppies: 0,
        kittens: 0
    };
}

Counter.prototype.record = function(key) {
    this.pet[key]++;
};

Counter.prototype.retrieve = function(key) {
   return this.pet[key];
};

Counter.prototype.results = function(){
    return this.pet;
}



// Create a new Counter instance, like: `var voteCounter = new Counter()`

var voteCounter = new Counter();

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."
app.get('/kittens', function(req, res){
    voteCounter.record("kittens");
    res.send("Thank you fro voting! Kittens have " + voteCounter.retrieve('kittens')); 
});

app.get('/puppies', function(req, res){
    voteCounter.record('puppies');
    res.send("Thank you fro voting! Puppies have " + voteCounter.retrieve('puppies')); 
});

// Respond to 'get' requests for the route '/puppies'
// - Record a vote for 'puppies'
// - Retrieve the new cumulative votes for 'puppies'
// - Respond with with the message:
//     "Thank you for voting! Puppies have 12 total votes so far."


// Have the Express application listen for incoming requests on port 8080

app.listen(8080);






