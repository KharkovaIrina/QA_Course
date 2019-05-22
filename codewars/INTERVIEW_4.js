//Развернуть массив "на месте". Отобразить значения в массиве  за один проход и без использования сортировки.
// [5, 0, 13, 6, 20] -> [20, 6, 13, 0, 5]
function revertArray(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let k = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = k;
    }
    return arr;
}
console.log(revertArray([1,2,3,4,5]));