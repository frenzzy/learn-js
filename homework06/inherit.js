/**
 * Организует наследование для функций-конструкторов
 * @param {Function} Child
 * @param {Function} Parent
 */
function inherit(Child, Parent) {
    "use strict";
    function F() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
