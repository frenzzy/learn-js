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
    }, arguments.length - 1);
}