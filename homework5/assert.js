var assert = {};

assert.result = [];
assert.consoleLog = console.log;

assert.log = function (str) {
    "use strict";
    assert.result.push(str);
    return assert.consoleLog.apply(console, arguments);
};

assert.shouldLog = function (callback, expected, message) {
    "use strict";
    console.log = this.log;
    callback();
    expected.forEach(function (element, index) {
        console.assert(assert.result[index] === element, message);
    });
    console.log = this.consoleLog;
};