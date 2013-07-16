/*jslint nomen: true, devel: true*/
/*global JS*/

/**
 * @class Class
 */
var Class = JS.extend({

    /**
     * @constructor
     * @protected
     */
    _init: function () {
        "use strict";

        console.log('init');
    },

    /**
     * @public
     */
    method: function () {
        "use strict";

        console.log('method');
    }
});