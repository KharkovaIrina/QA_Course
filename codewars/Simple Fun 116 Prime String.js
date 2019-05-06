function primeString(str) {
    for (let i = 2; i <= str.length; i++) {
        let newStr = str.substring(0, i).repeat((str.length/i));
        if (newStr === str && (str.length/i) !==1) {
            return false;
        }
    }
    return true;
}

console.log(primeString('abc'));