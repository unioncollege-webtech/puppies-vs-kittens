// Counter constructor definition
function Counter() {
    // Create a property on the `this` reference to store counts for each key
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {

};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {

};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {

};

// Record a vote for kittens
voteCounter.record('kittens');
// Retrieve the number of votes for kittens
var kittenVotes = voteCounter.retrieve('kittens');
// => 1

module.exports = Counter;
