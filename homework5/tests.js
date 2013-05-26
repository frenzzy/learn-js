// Kitten tests
var kitten = new Kitten('April', 'I wanna live');

console.assert(typeof kitten === 'object', 'createKitten() should return an object');
console.assert(kitten.name === 'April', 'Bad kitten name');
console.assert(typeof kitten.die === 'function', 'die() is not a function');

var stupidKitten = new Kitten('Nyasha', 'meow');

// Bag tests
var bag = new Bag();

console.assert(typeof bag === 'object', 'bag is not an object');
console.assert(typeof bag.put === 'function', 'put() is not a function');

bag.put(kitten);
bag.put(stupidKitten);

console.assert(bag.getKitten('April') === kitten, 'getKitten() should return the kitten');
console.assert(bag.getKitten('notExistedKitten') === null, 'getKitten() should return a null');

bag.sink();

// console.log tests
console.result = null;
console.originalLog = console.log;

console.testLog = function (str) {
    "use strict";
    this.result = str;
    return this.originalLog.apply(this, arguments);
};

console.shouldLog = function (callback, expected, message) {
    "use strict";
    this.log = this.testLog;
    callback();
    this.assert(this.result === expected, message);
    this.log = this.originalLog;
};

console.shouldLog(function () {
    kitten.die();
}, 'I wanna live', 'April says wrong lastWord');

console.shouldLog(function () {
    stupidKitten.die();
}, 'meow', 'Nyasha says wrong lastWord');