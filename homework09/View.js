/*jslint nomen: true, devel: true, browser: true, continue: true*/

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
     * @protected
     */
    this._element = element;

    /**
     * Хранит события в милом формате
     * @type {Object}
     * @private
     */
    this._events = {
        own: {},
        child: {}
    };

    this._initEvents();
}


/**
 * @type {Object}
 */
View.prototype.events = {};

/**
 * @private
 */
View.prototype._initEvents = function () {
    "use strict";
    var eventList = this.events,
        eventDescription,
        expression,
        eventName,
        selector;

    for (eventDescription in eventList) {
        if (eventList.hasOwnProperty(eventDescription)) {
            expression = /(\w+)\s?([\s\S]+)?/.exec(eventDescription);

            if (!expression) {
                continue;
            }

            eventName = expression[1];
            selector = expression[2];

            if (selector) {
                if (this._events.own[eventName] === undefined) {
                    this._events.own[eventName] = null;
                }

                if (this._events.child[eventName] === undefined) {
                    this._events.child[eventName] = {};
                }

                this._events.child[eventName][selector] = this[eventList[eventDescription]];
            } else {
                this._events.own[eventName] = this[eventList[eventDescription]];
            }
        }
    }

    eventList = this._events.own;

    for (eventName in eventList) {
        if (eventList.hasOwnProperty(eventName)) {
            this._element.addEventListener(eventName, this._handleEvent.bind(this));
        }
    }
};

/**
 * @private
 */
View.prototype._handleEvent = function (event) {
    "use strict";
    if (this._element === event.target && this._events.own[event.type]) {
        this._events.own[event.type].call(this, event);
    }

    var selectors = this._events.child[event.type],
        selector;

    if (!selectors) {
        return;
    }

    for (selector in selectors) {
        if (selectors.hasOwnProperty(selector)) {
            if (!event.target.matchesSelector(selector)) {
                continue;
            }

            this._events.child[event.type][selector].call(this, event);
        }
    }
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

    if (!this.hasClass(className)) {
        this._element.className += (this._element.className ? ' ' : '') + className;
    }

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