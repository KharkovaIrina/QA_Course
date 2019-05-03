function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let north = 0, south = 0, east = 0, west = 0;
    let str = walk.join('');
    if (str.match(/n/)) {
        north = str.match(/n/g).length;
    }
    if (str.match(/s/)) {
        south = str.match(/s/g).length;
    }
    if (str.match(/w/)) {
        west = str.match(/w/g).length;
    }
    if (str.match(/e/)) {
        east = str.match(/e/g).length;
    }
    if (west !== east || north !== south) {
        return false;
    }
    return true;
}

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));