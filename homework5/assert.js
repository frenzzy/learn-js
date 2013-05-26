/**
 * Расширят console.asset для работы с console.log
 * @type {Object}
 */
var assert = {};

/**
 * Хранит сообщения выводимые console.log
 * @type {Array}
 */
assert.result = [];

/**
 * Хранит встроенный метод console.log
 * @type {Function}
 */
assert.consoleLog = console.log;

/**
 * Эмулирует console.log сохраняя аргументы в массив
 * @returns {*} Возвращает тоже что console.log
 */
assert.log = function () {
    "use strict";
    Array.prototype.forEach.call(arguments, function (arg) {
        assert.result.push(arg);
    });
    return assert.consoleLog.apply(console, arguments);
};

/**
 * Сравнивает выводимые логи с ожидаемыми и выводит сообщение если не совпадают
 * @param {Function} callback Функция которая содержит любой код, использующий console.log
 * @param {Array} expected Ожидаемые результаты
 * @param {String} message Сообщение при не верном результате
 */
assert.shouldLog = function (callback, expected, message) {
    "use strict";
    console.log = assert.log;
    callback();
    expected.forEach(function (str, i) {
        console.assert(assert.result[i] === str, message);
    });
    console.log = assert.consoleLog;
    assert.result = [];
};