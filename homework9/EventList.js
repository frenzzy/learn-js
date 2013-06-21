/*jslint todo: true, nomen: true*/
/*global inherit, List*/

/**
 * Список который при добавлении элемента сообщает об этом
 * @class Событийный список
 * @param {Element} element
 * @param {Object} manager
 * @constructor
 */
function EventList(element, manager) {
    "use strict";

    List.call(this, element); // TODO: заменить List на что-то вроде this.parentConstructor;

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
 */
EventList.prototype.addItem = function (item) {
    "use strict";

    return this.constructor.addItem(item) // TODO: проверить правильность записи
        && this._manager.addItemToFirstList(item.cloneNode(true));
};