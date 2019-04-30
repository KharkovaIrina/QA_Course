function wave(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let arr = str.split('');
        if(arr[i] === ' '){
            continue;
        }
        arr.splice(i,1,arr[i].toUpperCase());
        res.push(arr.join(''));
    }
    return res;
}

console.log(wave('hello world'));