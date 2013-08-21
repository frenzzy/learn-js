define(["D"], function (D) {
    "use strict";

    /**
     * @class C
     * @constructor
     */
    var C = function () {
        "use strict";
        console.log("C");
        var d = new D();
    };

    return C;
});

