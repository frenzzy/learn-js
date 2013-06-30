/**
 * Организует наследование для функций-конструкторов
 * @param {Function} Child
 * @param {Function} Parent
 */
function inherit(Child, Parent) {
    "use strict";

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}