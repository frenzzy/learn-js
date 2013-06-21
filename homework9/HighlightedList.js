/*jslint todo: true, nomen: true*/
/*global inherit, List*/

/**
 * Список который умеет подсвечивать сам себя
 * @class Подсвечивающийся список
 * @constructor
 */
function HighlightedList(element) {
    "use strict";

    List.call(this, element); // TODO: заменить List на что-то вроде this.parentConstructor;
}

inherit(List, HighlightedList);

/**
 * Добавляет класс .highlight для списка
 * @private
 */
HighlightedList.prototype._highlightSelf = function () {
    "use strict";

    var className = this._element.className,
        expression = /\s?highlight/;

    if (expression) {
        this._element.className = className.replace(expression, '');
    } else {
        this._element.className = className + ' highlight';
    }
};

/**
 * Добавляет элемент в список
 * @param {Element} item
 */
HighlightedList.prototype.addItem = function (item) {
    "use strict";

    this._highlightSelf();
    return this.constructor.addItem(item); // TODO: проверить правильность записи
};