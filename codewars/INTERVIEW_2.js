//Для этого же массива написать функцию, возвращающую объект по типу - {10: 3, 8: 2 }, где ключи (10 и 8 ) -
// это повторяющиеся элементы входного массива, а значения ключей (3 и 2) - это количество повторений
function repetitionObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] ===  undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    for (let num in obj) {
        if (obj[num] === 1) {
            delete obj[num];
        }
    }
    return obj;
}

console.log(repetitionObj([10, 2, 8, 10, 6, 10, 8, 95]));