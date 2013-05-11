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