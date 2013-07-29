/*jslint browser: true, plusplus: true, nomen: true, todo: true*/
/*global window*/

(function () {
    "use strict";

    var div = document.createElement('div'),

        /**
         * @param {String|HTMLElement} [selector]
         * @returns {Object}
         * @constructor
         * @class Lib
         */
        Lib = function (selector) {

            function F() {
                this.init(selector);
            }

            F.prototype = Lib.prototype;
            F.prototype.constructor = Lib;

            return new F();
        };

    Lib.prototype = Object.create(Array.prototype);
    Lib.prototype.constructor = Lib;

    /**
     * @param {String|HTMLElement} [selector]
     * @returns {Lib}
     */
    Lib.prototype.init = function (selector) {

        if (!selector) {
            return this;
        }

        if (typeof selector === 'string') {

            var elements,
                length,
                i;

            if (selector.charAt(0) === '<') {
                div.innerHTML = selector;
                elements = div.childNodes;
            } else {
                elements = document.querySelectorAll(selector);
            }

            for (i = 0, length = elements.length; i < length; i++) {
                this.push(elements[i]);
            }

        } else if (selector.nodeType) {

            this.push(selector);
        }

        return this;
    };

    /**
     * @param {String} selector
     * @returns {Lib}
     * @public
     */
    Lib.prototype.find = function (selector) {

        var result = Lib.call(this),
            elements,
            length,
            i;

        this.forEach(function (node) {
            elements = node.querySelectorAll(selector);
            length = elements.length;

            for (i = 0; i < length; i++) {
                result.push(elements[i]);
            }
        });

        return result;
    };

    /**
     * @type {Object}
     * @private
     */
    Lib.prototype._events = {};

    /**
     * @param {String} eventName
     * @param {Function} callback
     * @returns {Lib}
     * @public
     */
    Lib.prototype.on = function (eventName, callback) {

        var events = this._events,
            eventHandlers;

        if (!events[eventName]) {
            events[eventName] = {};
        }

        eventHandlers = events[eventName];

        this.forEach(function (node) {

            if (!eventHandlers[node]) {
                eventHandlers[node] = [];
            }

            eventHandlers[node].push(callback);
            node.addEventListener(eventName, callback);
        });

        return this;
    };

    /**
     * @param {String} eventName
     * @param {Function} [callback]
     * @returns {Lib}
     * @public
     */
    Lib.prototype.off = function (eventName, callback) {

        var events = this._events,
            eventHandlers;

        if (!events[eventName]) {
            return this;
        }

        eventHandlers = events[eventName];

        if (!callback) {

            this.forEach(function (node) {

                if (!eventHandlers[node]) {
                    return;
                }

                eventHandlers[node].forEach(function (handler) {
                    node.removeEventListener(eventName, handler);
                });

                delete eventHandlers[node];
            });

            return this;
        }

        this.forEach(function (node) {
            node.removeEventListener(eventName, callback);
        });

        return this;
    };

    /**
     * @param {Function} [callback]
     * @returns {Lib}
     * @public
     */
    Lib.prototype.click = function (callback) {

        if (!callback) {

            this.forEach(function (node) {
                node.click();
            });

            return this;
        }

        return this.on('click', callback);
    };

    /**
     * @param {String|Object} name
     * @param {String} [value]
     * @returns {Lib|String}
     * @public
     */
    Lib.prototype.css = function (name, value) {

        if (typeof name === 'object') {
            this.forEach(function (node) {
                var prop;
                for (prop in name) {
                    if (name.hasOwnProperty(prop)) {
                        node.style[prop] = name[prop];
                    }
                }
            });
        }

        if (!value) {
            return this[0].style[name];
        }

        this.forEach(function (node) {
            node.style[name] = value;
        });

        return this;
    };

    /**
     * @param {String|Object} name
     * @param {String} [value]
     * @returns {Lib|String}
     * @public
     */
    Lib.prototype.attr = function (name, value) {

        if (typeof name === 'object') {
            this.forEach(function (node) {
                var prop;
                for (prop in name) {
                    if (name.hasOwnProperty(prop)) {
                        node.setAttribute(prop, name[prop]);
                    }
                }
            });
        }

        if (!value) {
            return this[0].getAttribute(name);
        }

        this.forEach(function (node) {
            node.setAttribute(name, value);
        });

        return this;
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.addClass = function (className) {

        this.forEach(function (node) {
            if (node.className.indexOf(className) === -1) {
                node.className += (node.className ? ' ' : '') + className;
            }
        });

        return this;
    };

    /**
     * @param {String} className
     * @returns {Boolean}
     * @public
     */
    Lib.prototype.hasClass = function (className) {

        var result = false;

        this.forEach(function (node) {
            if (node.className.indexOf(className) !== -1) {
                result = true;
            }
        });

        return result;
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.removeClass = function (className) {

        this.forEach(function (node) {
            node.className = node.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '');
        });

        return this;
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.toggleClass = function (className) {

        this.forEach(function (node) {
            if (node.className.indexOf(className) === -1) {
                node.className += (node.className ? ' ' : '') + className;
            } else {
                node.className = node.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '');
            }
        });

        return this;
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.appendTo = function (element) {

        this.forEach(function (node) {
            element.appendChild(node);
        });

        return this;
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prependTo = function (element) {

        var firstChild = element.firstChild;

        this.forEach(function (node) {
            element.insertBefore(node, firstChild);
        });

        return this;
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.append = function (element) {

        this.forEach(function (node) {
            node.appendChild(element[0]);
        });

        return this;
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prepend = function (element) {

        this.forEach(function (node) {
            node.insertBefore(element[0], node.firstChild);
        });

        return this;
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertAfter = function (element) {

        var parent = element.parentNode,
            child = element.nextSibling;

        this.forEach(function (node) {
            parent.insertBefore(node, child);
        });

        return this;
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertBefore = function (element) {

        var parent = element.parentNode;

        this.forEach(function (node) {
            parent.insertBefore(node, element);
        });

        return this;
    };

    window.$ = Lib;
}());