function revertVowels(str) {
    let letters = 'aeuio';
    let arr = str.split('');
    const vow = [];
    for (let i = 0; i < arr.length; i++) {
        if (letters.includes(arr[i])) {
            vow.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (letters.includes(arr[i])) {
            arr[i] = vow.pop();
        }
    }
    return arr.join('');
}

console.log(revertVowels('Hello all!'));