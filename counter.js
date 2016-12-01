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

 
 module.exports = Counter; 