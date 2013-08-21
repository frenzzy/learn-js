requirejs.config({
    paths: {
        test: "test/test2",
        C: "test/test2/C",
        D: "DClass",
        $: "jQuery"
    },
    shim: {
        D: {
            exports: "DClass"
        },
        $: {
            exports: "jQuery"
        }
    }
});

require(["B"], function (B) {
    "use strict";

    //var a = new A();
    var b = new B();
});