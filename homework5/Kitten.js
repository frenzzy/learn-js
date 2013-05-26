/**
 * Создает котенка
 * @class Kitten
 * @param {String} name Имя котенка
 * @param {String} lastWord Последние слова котенка
 * @constructor
 */
var Kitten = function (name, lastWord) {
    "use strict";

    /** @type {String} */
    this.name = name;

    /** @type {String} */
    this.lastWord = lastWord;
};

/**
 * Убивает котенка, заставляя произнести его последние слова
 */
Kitten.prototype.die = function () {
    "use strict";
    console.log(this.lastWord);
};