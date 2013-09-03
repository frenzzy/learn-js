if (typeof define != 'function') {
    var define = function(callback){
        Ofio = callback();
    }
}

define(function () {
    /**
     * @class Ofio
     * @constructor
     */
    var Ofio = function () {
        "use strict";
    };

    /**
     * @param {Object} prototype
     * @returns {Function}
     */
    Ofio.extend = function (prototype) {
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

        F.extend = this.extend;

        return F;
    };

    return Ofio;
});
