function smallestDiff(arr1, arr2) {
    let a1s = arr1.sort((a, b)=>(a-b));
    let a2s = arr2.sort((a, b)=>(a-b));
    if (arr1.length === 0 && arr2.length === 0) {
        return -1;
    } else if (arr1.length === 0) {
        return a2s[0];
    } else if (arr2.length === 0) {
        return a1s[0];
    } else {
        let dif = Math.abs(a1s[0] - a2s[0]);
        for (let i = 0; i < a1s.length; i++) {
            for (let j = 0; j < a2s.length; j++) {
                if (Math.abs(a1s[i] - a2s[j]) === 0) {
                    return 0;
                }
                if (Math.abs(a1s[i] - a2s[j]) < dif) {
                    dif = Math.abs(a1s[i] - a2s[j]);
                }
            }
        }
        return dif;
    }
}

console.log(smallestDiff([45, 34, 67, 10, 60], [36]));