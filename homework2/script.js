function cascadeCall(fn) {
    "use strict";

    // хм..
}

// Проверка
function a(n) {
    "use strict";
    return n * 2;
}

function b() {
    "use strict";
    return 5;
}

console.log(
    cascadeCall(a, b)
);