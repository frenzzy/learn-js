/**
 * multiplyArrays() возвращает произведение чисел массива передаваемого в каждом аргументе
 * @param {...Number[]} nums Массив чисел, для которых нужно найти произведение
 * @returns {Number[]} Массив чисел, размер которого равен количеству переданных аргументов
 */
function multiplyArrays(nums) {
    "use strict";
    return Array.prototype.map.call(arguments, function (numbers) {
        return numbers.reduce(function (prev, curr) {
            return prev * curr;
        });
    });
}