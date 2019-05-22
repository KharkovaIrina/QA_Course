function duplicateCount(text) {
    let str = text.toLowerCase();
    const obj = {};
    for (let l of str) {
        if (obj[l] === undefined) {
            obj[l] = 1;
        } else {
            obj[l]++;
        }
    }
    console.log(obj);
    let count = 0;
    for( let num in obj){
        if(obj[num] > 1){
            count++;
        }
    }
    return count;
}

console.log(duplicateCount("aabbcde"));