var kitten = createKitten('April', 'I wanna live');

console.assert(typeof kitten === 'object', 'should return an object');
console.assert(kitten.name === 'April', 'bad kitten name');
console.assert(typeof kitten.die === 'function', 'is not a function');

var stupidKitten = createKitten('Nyasha', 'meow');

console.assert(typeof bag === 'object', 'is not an object');
console.assert(typeof bag.put === 'function', 'is not a function');

bag.put(kitten);
bag.put(stupidKitten);

console.assert(bag.getKitten('April') === kitten, 'should return the kitten');
console.assert(bag.getKitten('notExistedKitten') === null, 'should return a null');

bag.sink();