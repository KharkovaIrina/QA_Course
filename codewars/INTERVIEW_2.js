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