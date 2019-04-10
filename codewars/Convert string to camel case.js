function toCamelCase(str) {
    let string = str.replace(/[-_]/g, " ");
    let arr = string.split(' ');
    for (i = 1; i < arr.length; i++) {
        let first = arr[i].charAt(0);
        arr[i] = arr[i].replace(first,first.toUpperCase());
    }
    return arr.join('');
}

console.log(toCamelCase('I-am-a-programmer'));