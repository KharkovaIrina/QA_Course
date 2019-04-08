var summation = function (num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
};
console.log(summation(6));