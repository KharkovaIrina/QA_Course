function averageString(str) {
    const digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let sum = 0;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if(digit.indexOf(arr[i]) == -1){
            return 'n/a';
        }
        sum += digit.indexOf(arr[i]);
    }
    let avg = parseInt(sum / arr.length);
    return digit[avg];
}

console.log(averageString(""));