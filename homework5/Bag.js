/**
 * Создает мешок для складирования котят
 * @constructor
 */
var Bag = function () {
    "use strict";
    this.kittens = {};
};

/**
 * Добавляет котенка в мешок
 * @param {Object} kitten
 */
Bag.prototype.put = function (kitten) {
    "use strict";
    this.kittens[kitten.name] = kitten;
};

/**
 * Возвращает котенка по имени
 * @param name
 * @returns {Object|null}
 */
Bag.prototype.getKitten = function (name) {
    "use strict";
    return this.kittens[name] || null;
};

/**
 * Вызывает функцию die() у всех котят в мешке
 */
Bag.prototype.sink = function () {
    "use strict";
    var object = this.kittens,
        prop;
    for (prop in object) {
        if (object.hasOwnProperty(prop)) {
            object[prop].die();
        }
    }
};