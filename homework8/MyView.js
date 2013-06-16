/*global View, inherit*/

function MyView(params) {
    "use strict";
    this.bindEvents(params.el);
}

inherit(View, MyView);

MyView.prototype.events = {
    "click": "doSmth",
    "click .a": "doA",
    "click .b": "doB"
};

MyView.prototype.doSmth = function () {
    "use strict";
    console.log("doSmth");
};

MyView.prototype.doA = function () {
    "use strict";
    console.log("doA");
};

MyView.prototype.doB = function () {
    "use strict";
    console.log("doB");
};
