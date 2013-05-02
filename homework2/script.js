/**
 * cascadeCall() возвращает результат выполнения первой функции, в которую будет передан результат выполнения второй
 * функции, в которую будет передан результат выполнения третьей и т. д.
 * @param {...function()} fn Функция которая принимает в качестве аргумента другую функцию и возвращает значение
 * @returns {*} Результат выполнения функции переданной первым агрументом
 */
function cascadeCall(fn) {
    "use strict";
    var i = arguments.length,
        result = arguments[--i]();

    while (i > 0) {
        result = arguments[--i](result);
    }

    return result;
}

// Проверка
function a(n) {
    "use strict";
    return n * 2;
}

function b() {
    "use strict";
    return 5;
}

console.log(
    cascadeCall(a, b)
);