/*jslint todo: true, nomen: true*/
/*global inherit, List, setTimeout*/

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
HighlightedList.prototype._highlightSelfToggle = function () {
    "use strict";

    var className = this._element.className,
        expression = /\s?highlight/;

    if (className.indexOf('highlight') === -1) {
        this._element.className = className + ' highlight';
    } else {
        this._element.className = className.replace(expression, '');
    }
};

/**
 * Добавляет элемент в список
 * @param {Element} item
 */
HighlightedList.prototype.addItem = function (item) {
    "use strict";

    this._highlightSelfToggle();
    setTimeout(this._highlightSelfToggle.bind(this), 100);
    setTimeout(this._highlightSelfToggle.bind(this), 200);
    setTimeout(this._highlightSelfToggle.bind(this), 300);
    return this.constructor.addItem(item); // TODO: проверить правильность записи
};