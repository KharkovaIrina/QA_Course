function parse(str) {
    let count = 0;
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let sym = str.charAt(i);
        if (sym === 'i') {
            count++;
        } else if (sym === 's') {
            count = count ** 2;
        } else if (sym === 'd') {
            count--;
        } else if (sym === 'o') {
            arr.push(count);
        }
    }
    return arr;
}

console.log(parse("iiisdoso"));