/*jslint nomen: true*/
/*global inherit, View*/

/**
 * Содержит информацию о списке
 * @param {Element} element
 * @constructor
 */
function List(element) {
    "use strict";

    View.call(this, element);
}

inherit(View, List);

/**
 * Добавляет элемент в список
 * @param {Element} item
 * @returns {Object}
 */
List.prototype.addItem = function (item) {
    "use strict";

    return this.addElement(item);
};