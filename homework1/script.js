/*
 * Функция multiplyArrays
 * - может принимать на вход произвольное количество массивов
 * - каждый из этих массивов может содержать произвольное количество чисел
 * - функция возвращает массив, количество элементов этого массива равно количеству переданных массивов
 * - каждый элемент возвращаемого массива - результат перемножения элементов соответствующего принятого массива
 */
function multiplyArrays() {

    var array = [];

    for (var i = 0; i < arguments.length; i++) {

        var product = arguments[i][0];

        for (var j = 1; j < arguments[i].length; j++) {
            product *= arguments[i][j];
        }

        array.push(product);
    }

    return array;
}

// Проверка
console.log(
    multiplyArrays([1,2], [12,5,7], [1])
);