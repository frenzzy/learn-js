/**
 * multiplyArrays() возвращает произведение чисел массива передаваемого в каждом аргументе
 * @param {...Number[]} nums Массив чисел, для которых нужно найти произведение
 * @returns {Number[]} Массив чисел, размер которого равен количеству переданных аргументов
 */
function multiplyArrays(nums) {
    "use strict";
    var results = [],
        argumentsLength = arguments.length,
        numbers,
        numbersLength,
        product,
        i,
        j;

    for (i = 0; i < argumentsLength; i++) {
        numbers = arguments[i];
        numbersLength = numbers.length;
        product = numbers[0];

        for (j = 1; j < numbersLength; j++) {
            product *= numbers[j];
        }

        results.push(product);
    }

    return results;
}

// Проверка
console.log(
    multiplyArrays([1, 2], [12, 5, 7], [1])
);