/*jslint nomen: true*/

/**
 * Хранит информацию обо всех списках и позволяет управлять ими
 * @constructor
 */
function ListManager() {
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
 * @returns {Number}
 */
ListManager.prototype.addList = function (list) {
    "use strict";

    return this._lists.push(list);
};

/**
 * Добавляет элемент в первый список
 * @param {Element} item
 * @returns {Object}
 */
ListManager.prototype.addItemToFirstList = function (item) {
    "use strict";

    return this._lists[0].addItem(item);
};