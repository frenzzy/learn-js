/*jslint todo: true, nomen: true*/
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

    // TODO: переписать без использования _element
    this._element.appendChild(item);

    return this;
};