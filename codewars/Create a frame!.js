function frame(arr, char) {
    let max = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    let len = max + 4;
    let str = char.repeat(len) + '\n';
    for (let i = 0; i < arr.length; i++) {
        let space = ' '.repeat(len - arr[i].length - 3);
        str = str + char + ' ' + arr[i] + space + char + '\n';
    }
    str = str + char.repeat(len);
    return str;
}

console.log(frame(['Create', 'a', 'frame'], '+'));