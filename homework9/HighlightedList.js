/*jslint nomen: true*/
/*global inherit, List, setTimeout*/

/**
 * Список который умеет подсвечивать сам себя
 * @param {Element} element
 * @constructor
 */
function HighlightedList(element) {
    "use strict";

    List.call(this, element);
}

inherit(HighlightedList, List);

/**
 * Добавляет класс .highlight для списка
 * @returns {Object}
 * @private
 */
HighlightedList.prototype._highlightSelfToggle = function () {
    "use strict";

    if (this.hasClass('highlight')) {
        return this.removeClass('highlight');
    }

    return this.addClass('highlight');
};

/**
 * Добавляет элемент в список
 * @param {Element} item
 * @returns {Object}
 * @private
 */
HighlightedList.prototype._addItem = function (item) {
    "use strict";

    this._highlightSelfToggle();
    setTimeout(this._highlightSelfToggle.bind(this), 100);
    setTimeout(this._highlightSelfToggle.bind(this), 200);
    setTimeout(this._highlightSelfToggle.bind(this), 300);

    return List.prototype._addItem.call(this, item);
};