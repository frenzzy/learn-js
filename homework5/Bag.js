/**
 * Создает мешок для складирования котят
 * @constructor
 */
var Bag = function () {
    "use strict";

    /** @type {Object} */
    this.kittens = {};
};

/**
 * Добавляет котенка в мешок
 * @param {{name: String, lastWord: String, die: Function}} kitten
 */
Bag.prototype.put = function (kitten) {
    "use strict";
    this.kittens[kitten.name] = kitten;
};

/**
 * Возвращает котенка по имени
 * @param {String} name
 * @returns {{name: String, lastWord: String, die: Function}|null}
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
    var kittens = this.kittens;
    for (var prop in kittens) {
        if (kittens.hasOwnProperty(prop)) {
            kittens[prop].die();
        }
    }
};