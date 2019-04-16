function queueTime(man, n) {
    let arr = [];
    arr.length = n;
    if (man.length === 0) {
        return 0;
    }
    if (n > 1) {
        arr.fill(0);
        console.log(arr);
        for (let j = 0; j < man.length; j++) {
            arr[0] = arr[0] + man[j];
            arr.sort((a, b) => a - b);
            console.log(arr);
        }
        return arr.pop();
    }
    return man.reduce((acc, elm) => acc + elm);
}
console.log(queueTime([], 1));