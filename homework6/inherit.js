/**
 * Организует Object.create для функций конструкторов
 * @param {Function} parent
 * @param {Function} child
 */
function inherit(parent, child) {
    "use strict";
    function F() {}
    F.prototype = parent.prototype;
    child.prototype = new F();
}