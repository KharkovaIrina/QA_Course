function isValid(formula) {
    /*material1 and material2 cannot be selected at the same time
    material3 and material4 cannot be selected at the same time
    material5 and material6 must be selected at the same time
    material7 or  material8 must be selected(at least one, or both)*/
    formula.sort((a, b) => a - b);
    let str = formula.join('');
    if (str.match(/12/) || str.match(/34/)) {
        return false;
    }
    if (str.includes('6')) {
        if (!str.includes('5')) {
            return false;
        }
    } else {
        if (str.includes('5')) {
            return false;
        }
    }
    return str.match(/[78]/) !== null;
}
console.log(isValid([1,3,5,6,7,8]));