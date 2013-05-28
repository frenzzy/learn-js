/**
 * Организует наследование для функций-конструкторов
 * @param {Function} Parent Родительский конструктор
 * @param {Function} Child Дочерний конструктор
 */
function inherit(Parent, Child) {
    "use strict";
    function F() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
