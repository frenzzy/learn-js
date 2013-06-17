/*jslint nomen: true, devel: true, todo: true*/

function View(element) {
    "use strict";

    this._element = element;
    this._events = {};
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
    var events = this.events;

    for (var eventDescription in events) {
        if (events.hasOwnProperty(eventDescription)) {
            var expression = /(\S+)([\s\S]+)?/.exec(eventDescription),
                eventName = expression[1],
                selector = expression[2];

            if (!this._events[eventName]) {
                this._events[eventName] = {};
            }

            if (selector) {
                this._events[eventName][selector] = this[events[eventDescription]];
            } else {
                // Не уверен что это хорошее место для сохранения метода
                this._events[eventName]._do = this[events[eventDescription]];
            }
        }
    }

    events = this._events;

    for (var event in events) {
        if (events.hasOwnProperty(event)) {
            this._element.addEventListener(event, this._bindEvents.bind(this, events[event]));
        }
    }
};

/**
 * @private
 */
View.prototype._bindEvents = function (elements, event) {
    "use strict";
    // TODO
    console.log(event.target, elements);
};