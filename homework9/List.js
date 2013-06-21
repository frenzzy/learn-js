/*jslint todo: true, nomen: true*/
/*global inherit, View*/

/**
 * Содержит информацию о списке
 * @param {Element} element
 * @class Список
 * @constructor
 */
function List(element) {
    "use strict";

    /**
     * Хранит элемент списка
     * @type {Element}
     * @private
     */
    this._element = element;

    // TODO: Продумать свойства списка
}

inherit(List, View);

/**
 * Добавляет элемент в список
 * @param {Element} item
 */
List.prototype.addItem = function (item) {
    "use strict";

    this._element.appendChild(item);
};