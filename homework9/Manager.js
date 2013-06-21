/*jslint todo: true, nomen: true, devel: true*/

/**
 * Хранит информацию обо всех списках и позволяет управлять ими
 * @class Менеджер списков
 * @constructor
 */
function Manager() {
    "use strict";

    /**
     * Хранит экземпляры класса List
     * @type {Array.<List>}
     * @private
     */
    this._lists = [];
}

/**
 * Сохраняет экземпляр класса List для дальнейшего использования
 * @param {List} list
 */
Manager.prototype.addList = function (list) {
    "use strict";

    this._lists.push(list);
};

/**
 * Добавляет элемент в первый список
 * @param {Element} item
 * @returns {Boolean}
 */
Manager.prototype.addItemToFirstList = function (item) {
    "use strict";

    return this._lists[0].addItem(item);
};