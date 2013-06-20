/*jslint nomen: true, continue: true, devel: true*/

function View(element) {
    "use strict";

    this._element = element;
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
            eventName = expression[1];
            selector = expression[2];

            if (!eventName) {
                continue;
            }

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
    var selectors = this._events.child[event.type],
        selector;

    if (this._element === event.target && this._events.own[event.type]) {
        this._events.own[event.type].call(this);
    }

    if (selectors === undefined) {
        return;
    }

    for (selector in selectors) {
        if (selectors.hasOwnProperty(selector)) {
            if (!event.target.matchesSelector(selector)) {
                continue;
            }

            this._events.child[event.type][selector].call(this);
        }
    }
};
