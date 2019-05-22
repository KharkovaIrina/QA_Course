function order(words) {
    if (words === ''){
        return '';
    }
    const arr = words.split(' ');
    const res = '0'.repeat(arr.length).split('');
    for (let str of arr) {
        let index = str.match(/\d/) - 1;
        res[index] = str;
    }
    return res.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));