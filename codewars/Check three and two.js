function checkThreeAndTwo(array) {
    function countLetter(char) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === char) {count++;}
        }
        return !((count !== 0) && (count < 2 || count > 3));
    }
    return countLetter('a') && countLetter('b') && countLetter('c');
}

console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]));