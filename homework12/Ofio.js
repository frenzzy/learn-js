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
            newClass = function () {
                this._init();
            };

        function F() {}
        F.prototype = this.prototype;
        newClass.prototype = new F();
        newClass.prototype.constructor = newClass;

        for (prop in prototype) {
            if (prototype.hasOwnProperty(prop)) {
                newClass.prototype[prop] = prototype[prop];
            }
        }

        newClass.extend = this.extend;

        return newClass;
    };

    return Ofio;
});
