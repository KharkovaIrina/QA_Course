function digital_root(n) {
    let str = n.toString();
    let arr = str.split('');
    console.log(arr);
    let res = arr.reduce((sum, elm) => parseInt(sum) + parseInt(elm));
    if (res > 9) {
        return digital_root(res);
    } else if (res == 0) {
        return 0;
    }
    return res;
}

console.log(digital_root(0));