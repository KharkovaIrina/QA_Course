function compare(number1, number2) {
    let base1 = number1[0];
    let exp1 = number1[1];

    let base2 = number2[0];
    let exp2 = number2[1];

    let y1 = Math.log(base1) * exp1;
    console.log(y1);

    let y2 = Math.log(base2) * exp2;
    console.log(y2);

    if (y1 > y2) {
        return number1;
    }
    return number2;
}
console.log(compare([2, 11], [3, 7]));