/*jslint devel: true, plusplus: true*/

/**
 * @param {Array} ar1
 * @param {Array} ar2
 */
console.compareArrays = function (ar1, ar2) {
    "use strict";

    this.assert(ar1.length === ar2.length, 'Lengths of arrays should be equal');

    var i = 0,
        ln = ar1.length;

    for (i; i < ln; i++) {
        this.assert(ar1[i] === ar2[i]);
    }
};

/**
 * @param {Array} ar1
 * @param {String} className
 * @param {Boolean} flag
 */
console.collectionHasClass = function (ar1, className, flag) {
    "use strict";

    var i = 0,
        ln = ar1.length,
        n;

    for (i; i < ln; i++) {
        n = ar1[i].className.indexOf(className);
        this.assert(flag ? n > -1 : n === -1);
    }
};