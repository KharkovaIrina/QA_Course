//Дан массив, к примеру [10, 2, 8, 10, 6, 10, 8, 95].
// Написать функцию, возвращающую массив, не содержащий повторений. [10, 2, 8, 6, 95]
function myfunc(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(!res.includes(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(myfunc([10, 2, 8, 7, 10, 8, 8, 5]));