var express = require('express');

// Create a new application instance
var app = express();

// Use Express's built-in static file server
app.use(express.static('public'));

//Count Class

function Count(){
      this.haveVotes = {
         kittens: 0,
         puppies: 0
      };
}

Count.prototype.record = function(key){
   this.haveVotes[key]++;
};

Count.prototype.retrieve = function(key){
   return this.haveVotes[key]++;
};

Count.prototype.results = function(key){
   return this.haveVotes;
};
// Create a counter instance

var ScoreCounter = new Count();

// Also respond to `GET` requests at the path '/hi'
app.get('/kittens', function(req, res){
   ScoreCounter.record('kittens');
   res.send('Thanks for voting for kittens! Kittens have ' + ScoreCounter.retrieve('kittens') + ' total votes so far.'); 
});

// Also respond to `GET` requests at the path '/hi'
app.get('/puppies', function(req, res){
   ScoreCounter.record('puppies');
   res.send('Thanks for voting for puppies ! Puppies have ' + ScoreCounter.retrieve('puppies') + ' total votes so far.'); 
});

// Listen on port 8080 for Cloud9
// https://docs.c9.io/docs/run-an-application#section-environment-variables
app.listen(8080);

//Log a message to the console.
console.log("Server is up!");