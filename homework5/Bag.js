/**
 * Создает мешок для складирования котят
 * @constructor
 */
var Bag = function () {
    "use strict";

    /** @type {Object.<string, Kitten>} */
    this.kittens = {};
};

/**
 * Добавляет котенка в мешок
 * @param {Kitten} kitten
 */
Bag.prototype.put = function (kitten) {
    "use strict";
    this.kittens[kitten.name] = kitten;
};

/**
 * Возвращает котенка по имени
 * @param {String} name
 * @returns {Kitten|null}
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
    var kittens = this.kittens,
        prop;
    for (prop in kittens) {
        if (kittens.hasOwnProperty(prop)) {
            kittens[prop].die();
        }
    }
};