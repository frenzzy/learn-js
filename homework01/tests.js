/*jslint devel: true*/
/*global multiplyArrays*/

var result = multiplyArrays([1, 2], [12, 5, 7], [1]);

console.assert(typeof result === 'object', 'multiplyArrays() should return an array');
console.assert(result[0] === 2, 'multiplyArrays([1, 2]) should return 2');
console.assert(result[1] === 420, 'multiplyArrays([12, 5, 7]) should return 420');
console.assert(result[2] === 1, 'multiplyArrays([1]) should return 1');