function sumStrings(a, b) {
    if (a.length === 0 && b.length !== 0) {
        return b;
    } else if (a.length !== 0 && b.length === 0) {
        return a;
    }
    if (a.match(/^0*/)) {
        a = a.replace(/^0*/, '');
    }
    if (b.match(/^0*/)) {
        b = b.replace(/^0*/, '');
    }
    let big;
    let small;
    if (a.length >= b.length) {
        big = a.split('');
        small = b.split('');
        console.log("Big: " + big);
        console.log("Small: " + small);
    } else {
        big = b.split('');
        small = a.split('');
        console.log("Big: " + big);
        console.log("Small: " + small);
    }
    let sum = [];
    let index = 0;
    for (let i = big.length - 1, j = small.length - 1; j >= 0; i--, j--) {
        index = i;
        let dig = parseInt(big[i]) + parseInt(small[j]);
        console.log("сумма двух цифр: " + dig);
        if (dig > 9 && i !== 0) {
            console.log("будет остаток");
            let rest = dig - 10;
            sum.unshift(rest);
            console.log("записываем:" + rest);
            big[i - 1] = parseInt(big[i - 1]) + 1;
            console.log(big[i - 1]);

        } else {
            sum.unshift(dig);
            console.log("сразу записываем: " + dig);
        }
    }
    console.log("Sum " + sum);
    console.log("Index " + index);
    if (index > 0) {
        return big.slice(0, index).join('') + sum.join('');
    }
    return sum.join('');
}

console.log(sumStrings('', '5'));