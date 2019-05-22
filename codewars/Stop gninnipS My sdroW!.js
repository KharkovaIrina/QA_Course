function spinWords(str){
    const arr = str.split(' ');
    for (let i in arr){
        if(arr[i].length > 4){
            arr[i] = arr[i].split('').reverse().join('');
            console.log(arr[i]);
            console.log(arr);
        }
    }
    return arr.join(' ');
}

console.log(spinWords("Hey fellow warriors"));