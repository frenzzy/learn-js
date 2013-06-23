/*jslint devel: true*/
/*global multiplyArrays, cascadeCall*/

// multiplyArrays tests
var result = multiplyArrays([1, 2], [12, 5, 7], [1]);

console.assert(typeof result === 'object', 'multiplyArrays() should return an array');
console.assert(result[0] === 2, 'multiplyArrays([1, 2]) should return 2');
console.assert(result[1] === 420, 'multiplyArrays([12, 5, 7]) should return 420');
console.assert(result[2] === 1, 'multiplyArrays([1]) should return 1');

// cascadeCall tests
function a(n) {
    "use strict";
    return n + n;
}

function b(n) {
    "use strict";
    return n * 2;
}

function c() {
    "use strict";
    return 5;
}

console.assert(cascadeCall(a, b, c) === 20, 'cascadeCall(a, b, c) should return 20');