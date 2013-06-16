function View() {
    "use strict";
}

View.prototype.events = {};

View.prototype.bindEvents = function (element) {
    "use strict";
    var eventList = this.events;

    for (var eventDescription in eventList) {
        if (eventList.hasOwnProperty(eventDescription)) {
            var parse = /(\S+)([\s\S]+)?/.exec(eventDescription);
            var event = parse[1];
            var selector = parse[2];
            var eventExecutor = this[eventList[eventDescription]];

            if (selector) {
                element.querySelector(selector).addEventListener(event, eventExecutor);
            } else {
                element.addEventListener(event, eventExecutor);
            }
        }
    }
};