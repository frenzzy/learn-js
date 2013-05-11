/**
 * createKitten() создает котенка
 * @param name Имя котенка
 * @param lastWord Последние слова котенка
 * @returns {Object}
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
     * @param {Object} kitten
     */
    put: function (kitten) {
        "use strict";
        this.kittens[kitten.name] = kitten;
    },
    /**
     * getKitten() возвращает котенка по имени
     * @param name
     * @returns {Object|Null}
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

