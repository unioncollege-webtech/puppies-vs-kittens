//http://www.bestcssbuttongenerator.com/#/3 for my cool looking css buttons.

// Require the Express module (https://npmjs.com/package/express)
var express = require('express');


// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));


function Counter() {
    this.animal = {
    };
}
Counter.prototype.record = function(key) {
    if(!(key in this.animal)) {
        this.animal[key] = 0;
    }
    else {
    this.animal[key]++;
}
};
Counter.prototype.retrieve = function(key) {
     if(!(key in this.animal)) {
        this.animal[key] = 0;
    }
    return this.animal[key];
};

var voteCounter = new Counter();


app.post('/kittens', function (req, res) {
    voteCounter.record('kittens');
    res.send("Thank you for voting! Kittens have " + voteCounter.retrieve('kittens') + " votes so far!");
});


app.post('/puppies', function (req, res) {
    voteCounter.record('puppies');
    res.send("Thank you for voting! Puppies have " + voteCounter.retrieve('puppies') + " votes so far!");
});


app.listen(8080);