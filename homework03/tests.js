/*jslint devel: true*/
/*global createKitten, bag*/

var kitten = createKitten('April', 'I wanna live');

console.assert(typeof kitten === 'object', 'createKitten() should return an object');
console.assert(kitten.name === 'April', 'Bad kitten name');
console.assert(typeof kitten.die === 'function', 'die() is not a function');

var stupidKitten = createKitten('Nyasha', 'meow');

console.assert(typeof bag === 'object', 'bag is not an object');
console.assert(typeof bag.put === 'function', 'put() is not a function');

bag.put(kitten);
bag.put(stupidKitten);

console.assert(bag.getKitten('April') === kitten, 'getKitten() should return the kitten');
console.assert(bag.getKitten('notExistedKitten') === null, 'getKitten() should return a null');

bag.sink();