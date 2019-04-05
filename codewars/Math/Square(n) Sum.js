function squareSum(numbers) {
    return numbers.reduce(((sum, el) => sum + el * el), 0);
}
console.log(squareSum([1, 2, 2]));