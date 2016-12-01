var express = require('express');
var Counter = require('./counter.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pug = require = ('pug');
var app = express();


app.use(express.static('public'));
app.use(express.static('images'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var voteCounter = new Counter();


app.post('/vote4pet', function (req, res) {
    var choice = req.body.choice;
    res.cookie('reject',true);
    voteCounter.record(choice);
    var voteCount = voteCounter.retrieve(choice);
    
        if(req.cookies.reject) {
         res.send('Nope - You have already voted.');
     }
     else {
         res.render('vote4pet', {
             choice: choice,
             voteCount: voteCount
         });

    }

});



app.listen(8080);

  