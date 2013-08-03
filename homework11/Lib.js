/*jslint browser: true, plusplus: true, nomen: true*/
/*global window*/

(function () {
    "use strict";

    /**
     * @param {String|HTMLElement} [selector]
     * @returns {Object}
     * @constructor
     * @class Lib
     */
    var Lib = function (selector) {
        return new Lib.prototype._init(selector);
    };

    Lib.prototype = Object.create(Array.prototype);
    Lib.prototype.constructor = Lib;

    /**
     * @param {String|HTMLElement} [selector]
     * @returns {Lib}
     * @protected
     */
    Lib.prototype._init = function (selector) {

        if (!selector) {
            return this;
        }

        if (typeof selector === 'string') {

            var elements,
                div;

            if (selector.charAt(0) === '<') {
                div = document.createElement('div');
                div.innerHTML = selector;
                elements = div.childNodes;
            } else {
                elements = document.querySelectorAll(selector);
            }

            this._addElements(elements);

        } else if (selector.nodeType) {

            this.push(selector);
        }

        return this;
    };

    Lib.prototype._init.prototype = Lib.prototype;

    /**
     * @type {Object}
     * @private
     */
    Lib.prototype._events = {};

    /**
     * @param {NodeList} elements
     * @private
     */
    Lib.prototype._addElements = function (elements) {

        var i, len;

        for (i = 0, len = elements.length; i < len; i++) {
            this.push(elements[i]);
        }
    };

    /**
     * @param {String} selector
     * @returns {Lib}
     * @public
     */
    Lib.prototype.find = function (selector) {

        var lib = new Lib.prototype._init(),
            len,
            i;

        for (i = 0, len = this.length; i < len; i++) {
            lib._addElements(this[i].querySelectorAll(selector));
        }

        return lib;
    };

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

        var i, len, prop;

        if (typeof name === 'object') {
            for (i = 0, len = this.length; i < len; i++) {
                for (prop in name) {
                    if (name.hasOwnProperty(prop)) {
                        this[i].style[prop] = name[prop];
                    }
                }
            }
        }

        if (!value) {
            return this[0].style[name];
        }

        for (i = 0, len = this.length; i < len; i++) {
            this[i].style[name] = value;
        }

        return this;
    };

    /**
     * @param {String|Object} name
     * @param {String} [value]
     * @returns {Lib|String}
     * @public
     */
    Lib.prototype.attr = function (name, value) {

        var i, len, prop;

        if (typeof name === 'object') {
            for (i = 0, len = this.length; i < len; i++) {
                for (prop in name) {
                    if (name.hasOwnProperty(prop)) {
                        this[i].setAttribute(prop, name[prop]);
                    }
                }
            }
        }

        if (!value) {
            return this[0].getAttribute(name);
        }

        for (i = 0, len = this.length; i < len; i++) {
            this[i].setAttribute(name, value);
        }

        return this;
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.addClass = function (className) {

        var i, len;

        for (i = 0, len = this.length; i < len; i++) {
            this[i].classList.add(className);
        }

        return this;
    };

    /**
     * @param {String} className
     * @returns {Boolean}
     * @public
     */
    Lib.prototype.hasClass = function (className) {

        var i, len;

        for (i = 0, len = this.length; i < len; i++) {
            if (this[i].classList.contains(className)) {
                return true;
            }
        }

        return false;
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.removeClass = function (className) {

        var i, len;

        for (i = 0, len = this.length; i < len; i++) {
            this[i].classList.remove(className);
        }

        return this;
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.toggleClass = function (className) {

        var i, len;

        for (i = 0, len = this.length; i < len; i++) {
            this[i].classList.toggle(className);
        }

        return this;
    };

    /**
     * @param {Lib|HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.appendTo = function (element) {

        var node = element,
            len,
            i;

        if (element instanceof Lib) {
            node = element[0];
        }

        for (i = 0, len = this.length; i < len; i++) {
            node.appendChild(this[i]);
        }

        return this;
    };

    /**
     * @param {Lib|HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prependTo = function (element) {

        var node = element,
            childNode,
            len,
            i;

        if (element instanceof Lib) {
            node = element[0];
        }

        childNode = node.firstChild;

        for (i = 0, len = this.length; i < len; i++) {
            node.insertBefore(this[i], childNode);
        }

        return this;
    };

    /**
     * @param {Lib|HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.append = function (element) {

        var node = element,
            len = this.length,
            i;

        if (element instanceof Lib) {
            node = element[0];
        }

        if (len) {
            this[0].appendChild(node);

            for (i = 1; i < len; i++) {
                this[i].appendChild(node.cloneNode(true));
            }
        }

        return this;
    };

    /**
     * @param {Lib|HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prepend = function (element) {

        var node = element,
            len = this.length,
            i;

        if (element instanceof Lib) {
            node = element[0];
        }

        if (len) {
            this[0].insertBefore(node, this[0].firstChild);

            for (i = 1; i < len; i++) {
                this[i].insertBefore(node.cloneNode(true), this[i].firstChild);
            }
        }

        return this;
    };

    /**
     * @param {Lib|HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertAfter = function (element) {

        var node = element,
            parentNode,
            childNode,
            len,
            i;

        if (element instanceof Lib) {
            node = element[0];
        }

        parentNode = node.parentNode;
        childNode = node.nextSibling;

        for (i = 0, len = this.length; i < len; i++) {
            parentNode.insertBefore(this[i], childNode);
        }

        return this;
    };

    /**
     * @param {Lib|HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertBefore = function (element) {

        var node = element,
            parentNode,
            len,
            i;

        if (element instanceof Lib) {
            node = element[0];
        }

        parentNode = node.parentNode;

        for (i = 0, len = this.length; i < len; i++) {
            parentNode.insertBefore(this[i], node);
        }

        return this;
    };

    window.$ = Lib;
}());