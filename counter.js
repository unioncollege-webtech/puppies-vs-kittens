// Counter constructor definition
function Counter() {
    // Create a property on the `this` reference to store counts for each key
    this.scores = {};
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
  if (!(key in this.scores)) {
    this.scores[key] = 0;
  }
  this.scores[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
  if (!(key in this.scores)) {
    this.scores[key] = 0;
  }
  return this.scores[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
  var ret = [];
  for (var i = 0; i < this.scores.length; i++) {
    ret.push(this.scores[i]);
  }
  return ret;
};

module.exports = Counter;
