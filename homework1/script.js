/**
 * Функция multiplyArrays
 * - может принимать на вход произвольное количество массивов
 * - каждый из этих массивов может содержать произвольное количество чисел
 * - функция возвращает массив, количество элементов этого массива равно количеству переданных массивов
 * - каждый элемент возвращаемого массива - результат перемножения элементов соответствующего принятого массива
 *
 * @returns {Array}
 */
function multiplyArrays() {
    "use strict";
    var resultArray = [],
        argumentsLength = arguments.length,
        argumentArray,
        argumentArrayLength,
        product,
        i,
        j;

    for (i = 0; i < argumentsLength; i++) {
        argumentArray = arguments[i];
        argumentArrayLength = argumentArray.length;
        product = argumentArray[0];

        for (j = 1; j < argumentArrayLength; j++) {
            product *= argumentArray[j];
        }

        resultArray.push(product);
    }

    return resultArray;
}

// Проверка
console.log(
    multiplyArrays([1, 2], [12, 5, 7], [1])
);