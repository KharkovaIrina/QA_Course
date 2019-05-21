function solution(roman) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let arr = roman.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = obj[arr[i]];
    }

    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] > arr[i - 1]) {
            let sub = arr[i] - arr[i - 1];
            arr.splice(i - 1, 2, sub);
            i++;
        }
    }
    return arr.reduce((sum, elm) => sum + elm);
}

console.log(solution('XLIIV'));