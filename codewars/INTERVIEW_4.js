function revertArray(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let k = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = k;
    }
    return arr;
}
console.log(revertArray([1,2,3,4,5]));