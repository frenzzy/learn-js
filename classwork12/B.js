define(["A", "C"], function (A, C) {
    "use strict";

    /**
     * @class B
     * @constructor
     */
    var B = function () {
        "use strict";
        A.call(this);
        console.log("B");

        var c = new C();
    };

    return B;
});

