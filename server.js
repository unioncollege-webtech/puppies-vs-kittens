// Require the Express module (https://npmjs.com/package/express)
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Create a new express application instance by calling `express()`
var app = express();

// Serve files in the 'public' directory with Express's built-in static file server
app.use(express.static('public'));

// Create a Counter class that will be used to create counter objects
// See the full description in README.md
var Counter = require('./counter.js');

// Create a new Counter instance, like: `var voteCounter = new Counter()`
var counter = new Counter();

// Respond to 'get' requests for the route '/kittens'
// - Record a vote for 'kittens'
// - Retrieve the new cumulative votes for 'kittens'
// - Respond with with the message:
//     "Thank you for voting! Kittens have 12 total votes so far."
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser())


app.post('/vote', function (req, res) {
    var choice = req.body.choice;
    var kitVotes = counter.retrieve('kittens');
    var pupVotes = counter.retrieve('puppies');
    
    res.cookie('voted', true);
    
    if(req.cookies.voted) {
        res.render('voted', {
            pupVotes: pupVotes,
            kitVotes: kitVotes
        })
    }
    else {
        counter.record(choice);
        res.render('vote', {
            choice: choice,
            pupVotes: pupVotes,
            kitVotes: kitVotes
        })
    }
    
})

// Have the Express application listen for incoming requests on port 8080
app.listen(8080);
console.log('server is up');