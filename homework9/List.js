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
 * @protected
 */
List.prototype._addItem = function (item) {
    "use strict";

    return View.prototype._addItem(item);
};