function stringClean(s) {
    let regExp = /[^0-9]/g;
    let arr = s.match(regExp);
    if (arr) {
        return arr.join('');
    }
    return "";
}

console.log(stringClean(" "));
