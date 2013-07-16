/*jslint nomen: true*/
/*global Class*/

/**
 * @class ChildClass
 * @extends Class
 */
var ChildClass = Class.extend({

    /**
     * @constructor
     * @protected
     */
    _init: function () {
        "use strict";

        Class.prototype._init.call(this);
    }
});