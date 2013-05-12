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

/**
 * cascadeCall() возвращает результат выполнения первой функции, в которую будет передан результат выполнения второй
 * функции, в которую будет передан результат выполнения третьей и т. д.
 * @param {...function()} fn Функция которая принимает в качестве аргумента другую функцию и возвращает значение
 * @returns {*} Результат выполнения функции переданной первым агрументом
 */
function cascadeCall(fn) {
    "use strict";
    return Array.prototype.reduceRight.call(arguments, function (prev, curr) {
        return curr(prev);
    }, null);
}