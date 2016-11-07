    var express = require('express');
    var app = express();
    app.use(express.static("public"));
    
    function Counter() {
        this.count = {};
    }
    Counter.prototype.record = function(key) {
        if (isNaN(this.count[key])) {
             this.count[key] = 0;
        }
         this.count[key]++;
    };
    Counter.prototype.retrieve = function(key) {
         return this.count[key];
    };
    Counter.prototype.results = function() {
        return this.count;
    };
    var voteCounter = new Counter();
    voteCounter.record('kittens');
    var kittenVotes = voteCounter.retrieve('kittens');
    => 1
    app.get('/kittens', function (req, res) {
         voteCounter.record('kittens');
         var score = voteCounter.retrieve('kittens');
         res.send("Thanks for voting! We really appreciate it! Kittens have " + score + " total votes so far.");
    });
    app.get("/puppies", function (req, res) {
         voteCounter.record("puppies");
         var score = voteCounter.retrieve("puppies");
         res.send("Thanks for voting! We really appreciate it! Puppies have " + score + " total votes so far.");
    });
    app.listen(8080);
    console.log("Server is up!");
         