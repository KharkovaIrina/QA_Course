function countSmileys(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/^[:;][-~]?[)D]$/)) {
            count++;
        }
    }
    return count;
}

console.log(countSmileys([':)', ':-(', ':-D', ':O', ':;']));