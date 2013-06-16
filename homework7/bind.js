Function.prototype.bind = function (context, arg1) {
    "use strict";
    var that = this,
        args = Array.prototype.slice.call(arguments, 1);

    return function (arg2) {
        return that.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    };
};