/**
 * Организует Object.create для функций конструкторов
 * @param {Function} Parent
 * @param {Function} Child
 */
function inherit(Parent, Child) {
    "use strict";
    function F() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
}