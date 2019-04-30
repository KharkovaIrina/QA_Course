function towerBuilder(nFloors) {
    let arr = [];
    let str = '';
    for (let i = 0; arr.length < nFloors; i = i + 2) {
        let spaceCount = nFloors - 1 - i / 2;
        str = ' '.repeat(spaceCount) + '*'.repeat(1 + i) + ' '.repeat(spaceCount);
        arr.push(str);
    }
    return arr;
}

console.log(towerBuilder(5));