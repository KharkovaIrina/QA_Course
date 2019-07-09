//Дан массив. Функция должна возвращать массив с минимальным и максимальным значением массива  [min, max].
 //   Не использовать Math.min&max
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min,max];
}

console.log(minMax([10, 2, 8, 10, 6, 10, 8, -95]));