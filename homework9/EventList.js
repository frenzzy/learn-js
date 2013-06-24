/*jslint nomen: true*/
/*global inherit, List*/

/**
 * Список который при добавлении элемента сообщает об этом
 * @param {Element} element
 * @param {Object} manager
 * @constructor
 */
function EventList(element, manager) {
    "use strict";

    List.call(this, element);

    /**
     * Хранит информацию о менеджере списков
     * @type {Object}
     * @private
     */
    this._manager = manager;
}

inherit(List, EventList);

/**
 * Добавляет элемент в список
 * @param {Element} item
 * @private
 */
EventList.prototype._addItem = function (item) {
    "use strict";

    this._manager.addItemToFirstList(item.cloneNode(true));

    return List.prototype._addItem.call(this, item);
};