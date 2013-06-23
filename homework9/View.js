/*jslint todo: true, nomen: true, devel: true*/

/**
 * Управляет DOM элементами
 * @param {Element} element
 * @constructor
 */
function View(element) {
    "use strict";

    /**
     * Хранит DOM элемент
     * @type {Element}
     * @private
     */
    this._element = element;

    // TODO: добавить drag and drop
}

/**
 * Добавляет DOM элемент
 * @param {Element} element
 * @returns {Object}
 */
View.prototype.addElement = function (element) {
    "use strict";

    this._element.appendChild(element);

    return this;
};

/**
 * Проверяет элемент на наличие css класса
 * @param {String} className
 * @returns {Boolean}
 */
View.prototype.hasClass = function (className) {
    "use strict";

    return this._element.className.indexOf(className) !== -1;
};

/**
 * Добавляет css класс элементу
 * @param {String} className
 * @returns {Object}
 */
View.prototype.addClass = function (className) {
    "use strict";

    this._element.className += (this._element.className ? ' ' : '') + className;

    return this;
};

/**
 * Удаляет css класс у элемента
 * @param {String} className
 * @returns {Object}
 */
View.prototype.removeClass = function (className) {
    "use strict";

    this._element.className = this._element.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '');

    return this;
};