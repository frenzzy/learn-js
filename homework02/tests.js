/*jslint devel: true*/
/*global cascadeCall*/

function a(n) {
    "use strict";
    return n * 2;
}

function b() {
    "use strict";
    return 5;
}

console.assert(cascadeCall(a, b) === 10, 'cascadeCall(a, b) should return 10');