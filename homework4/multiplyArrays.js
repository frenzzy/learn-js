/**
 * multiplyArrays() возвращает произведение чисел массива передаваемого в каждом аргументе
 * @param {...Number[]} nums Массив чисел, для которых нужно найти произведение
 * @returns {Number[]} Массив чисел, размер которого равен количеству переданных аргументов
 */
function multiplyArrays(nums) {
    "use strict";
    var result = [],
        product;

    Array.prototype.map.call(arguments, function (numbers) {
        product = Array.prototype.reduce.call(numbers, function (previousValue, currentValue) {
            return currentValue * previousValue;
        });

        result.push(product);
    });

    return result;
}