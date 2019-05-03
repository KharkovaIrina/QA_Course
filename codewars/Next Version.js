function nextVersion(version) {
    let arr = version.split('.');
    arr = arr.map(elm => parseInt(elm));

    function nine(arr, index) {
        if (arr[index] === 9 && index !== 0) {
            arr[index] = 0;
            nine(arr, index - 1);
        } else {
            arr[index]++;
        }
        return arr;
    }

    nine(arr, arr.length - 1);
    return arr.join('.');
}

console.log(nextVersion("9.9"));