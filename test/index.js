// If you would like to test your `Counter` function, add your code below and 
// run 'node test' to run the tests that follow.


// Counter constructor function
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




///
/// Test the Counter class
///

var assert = require('assert')
var hitCounter = new Counter();

var results = hitCounter.results();
assert.equal(typeof results, 'object', ".results() should return an object.");

hitCounter.record('pancakes');
assert.equal('pancakes' in results, true, "The object returned by .results() should have a 'pancake' property.");
assert.equal(results.pancakes, 1, "The object returned by .results() should have a 'pancake' property equal to 1");

assert.equal(hitCounter.retrieve('pancakes'), 1, ".retrieve('pancakes') should return the value 1");

hitCounter.record('waffles');
hitCounter.record('waffles');
hitCounter.record('waffles');

assert.equal(hitCounter.retrieve('waffles'), 3, ".retrieve('waffles') should return the value 3");

assert.equal(hitCounter.retrieve('bacon'), 0, "The return value for .retrieve('bacon') should be 0.");