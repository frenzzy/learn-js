/*jslint nomen: true*/

/**
 * @class JS
 * @constructor
 */
var JS = function () {
    "use strict";
};

/**
 * @param {Object} prototype
 * @returns {Function}
 */
JS.extend = function (prototype) {
    "use strict";

    var prop,
        F = function () {
            this._init();
        };

    F.prototype = Object.create(this.prototype);
    F.prototype.constructor = F;

    for (prop in prototype) {
        if (prototype.hasOwnProperty(prop)) {
            F.prototype[prop] = prototype[prop];
        }
    }

    // А нужно ли наследовать все статические свойства и методы!?
    F.extend = this.extend;

    return F;
};