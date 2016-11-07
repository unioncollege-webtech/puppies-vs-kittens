// Counter constructor definition
function Counter() {
    this.scores = {
        kittens: 0,
        puppies: 0
    }
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
    this.scores[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
    return this.scores[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
    return ('Votes for Kittens: ' + this.scores['kittens'] + '  Votes for Puppies: ' + this.scores['puppies']);
};

module.exports = Counter;

// // Create a new counter instance
// var voteCounter = new Counter();

// // Record a vote for kittens
// voteCounter.record('kittens');
// // Retrieve the number of votes for kittens
// var kittenVotes = voteCounter.results();
// // => 1