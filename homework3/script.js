/**
 * createKitten() создает котенка
 * @param {String} name Имя котенка
 * @param {String} lastWord Последние слова котенка
 * @returns {{name: String, die: Function}}
 */
function createKitten(name, lastWord) {
    "use strict";
    return {
        name: name,
        die: function () {
            console.log(lastWord);
        }
    };
}

/**
 * bag - мешок с котятами
 * @type {{kittens: {}, put: Function, getKitten: Function, sink: Function}}
 */
var bag = {
    kittens: {},
    /**
     * put() добавляет котенка в мешок
     * @param {{name: String, die: Function}} kitten
     */
    put: function (kitten) {
        "use strict";
        this.kittens[kitten.name] = kitten;
    },
    /**
     * getKitten() возвращает котенка по имени
     * @param {String} name
     * @returns {{name: String, die: Function}|Null}
     */
    getKitten: function (name) {
        "use strict";
        return this.kittens[name] || null;
    },
    /**
     * sink() вызывает функцию die() у всех котят в мешке
     */
    sink: function () {
        "use strict";
        var object = this.kittens,
            prop;
        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                object[prop].die();
            }
        }
    }
};