define(["Ofio"], function (Ofio) {

    describe("Ofio.extend", function () {

        /**
         * @class Class
         */
        var Class = Ofio.extend({

            /**
             * @constructor
             * @protected
             */
            _init: function () {
                "use strict";

                console.log('init');
            }
        });

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

        var child = new ChildClass();

        it("should be inherit", function() {
            expect(child instanceof Ofio).toBeTruthy();
        });

        it("should be defined", function() {
            expect(Ofio.extend).toBeDefined();
        });

        it("should be extends", function() {
            expect(ChildClass.extend).toBe(Ofio.extend);
        });

    });

});