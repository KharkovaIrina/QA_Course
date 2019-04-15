function validParentheses(par) {
    let begin = 0;
    let end = 0;
    for (let i = 0; i < par.length; i++) {
        par[i] === '(' ? begin++ : end--;
    }
    if (par.lastIndexOf('(') > par.lastIndexOf(')')) {
        return false;
    }
    return begin + end === 0;
}

console.log(validParentheses("(())"));