function solve(str) {
    let vowels = /[auioe]+/;
    let arr = str.split(vowels);
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr[i].length; j++) {
            let letter = arr[i].charCodeAt(j) - 96;
            count = count + letter;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}

console.log(solve("zodiac"));