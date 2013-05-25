/**
 * Создает котенка
 * @param {String} name Имя котенка
 * @param {String} lastWord Последние слова котенка
 * @constructor
 */
var Kitten = function (name, lastWord) {
    "use strict";
    this.name = name;
    this.lastWord = lastWord;
};

/**
 * Убивает котенка, заставляя произнести его последние слова
 */
Kitten.prototype.die = function () {
    "use strict";
    console.log(this.lastWord);
};