function arraySum(arr) {
    function reducer(sum, elem) {
        if (typeof(elem) == 'number') {
            sum += elem;
        } else if (Array.isArray(elem)) {
            sum += elem.reduce(reducer);
        }
        return sum;
    }
    return arr.reduce(reducer);
}
console.log(
    arraySum(
        [1, [1, 2], 4,'fg', [3, [4, [7, 7], 4], 3]]
    )
);