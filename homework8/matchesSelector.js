/*jslint plusplus: true*/
/*global Element */

if (!Element.prototype.matchesSelector) {
    Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector
        || Element.prototype.mozMatchesSelector
        || Element.prototype.msMatchesSelector
        || Element.prototype.oMatchesSelector
        || // Что-то querySelectorAll ничего не находит, хм..
        function (selector) {
            "use strict";
            var matches = this.querySelectorAll(selector),
                length = matches.length,
                i;

            for (i = 0; i < length; i++) {
                if (this === matches[i]) {
                    return true;
                }
            }

            return false;
        };
}