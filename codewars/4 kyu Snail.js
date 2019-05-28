function shell(array, res) {

    for (let elm of array.splice(0, 1)) {
        for (let l of elm) {
            res.push(l);
        }
    }

    for (let i = 0; i < array.length - 1; i++) {
        res.push(array[i].pop());

    }

    for (let elm of array.splice(array.length - 1)) {
        for (let i = elm.length - 1; i >= 0; i--) {
            res.push(elm[i]);
        }
    }

    for (let i = array.length - 1; i >= 0; i--) {
        res.push(array[i].shift());
    }
    if (array.length > 0) {
        shell(array, res);
    } else {
        return res;
    }
}

function 4(array) {
    const result = [];
    shell(array, result);
    return result;
}

console.log(4([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
