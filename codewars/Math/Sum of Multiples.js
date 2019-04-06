function sumMul(n, m) {
    let sum = 0;
    let i = 1;
    if (n > 0 && m > 0) {
        while (n * i < m) {
            sum = sum + n * i;
            i++;
        }
        return sum;
    }
    return 'INVALID';
}
console.log(sumMul(1, 13));