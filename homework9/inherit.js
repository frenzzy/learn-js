/**
 * Организует наследование для функций-конструкторов
 * @param {Function} Parent
 * @param {Function} Child
 */
function inherit(Parent, Child) {
    "use strict";

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.prototype.parentPrototype = Parent.prototype;
}