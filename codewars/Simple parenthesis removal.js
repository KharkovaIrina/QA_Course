function solve(s) {
    let inner;
    let outer;
    let arr = s.split('');
    console.log(arr);
    console.log(s);

    while (arr.indexOf('(') !== -1) {
        inner = arr.lastIndexOf('(');
        outer = arr.indexOf(')', inner);
        console.log('inner: ' + inner);
        console.log('outer: ' + outer);

        if (arr[inner - 1] === '-') {
            let i = 0;
            if (arr[inner + 1] === '-') {
                arr.splice(inner - 1, 3, '+');
                i = inner + 1;
            } else if (arr[inner + 1] === '+') {
                arr.splice(inner - 1, 3, '-');
                i = inner + 1;
            } else {
                arr.splice(inner, 1);
                i = inner;
            }
            outer = arr.indexOf(')', i);
            for (i; i < outer; i++) {
                if (arr[i] === '+') {
                    arr.splice(i, 1, '-');
                } else if (arr[i] === '-') {
                    arr.splice(i, 1, '+');
                }
            }
            arr.splice((outer), 1);
            console.log("после обрезания скобок: " + arr.join(''));
        } else {
            arr.splice(inner, 1);
            arr.splice(outer - 1, 1);
            console.log("после обрезания скобок: " + arr.join(''));
        }
    }
    s = arr.join('');
    console.log(s);
    s = s.replace(/\+-|-\+/g, '-');
    s = s.replace(/^\+/g, '');
    return s;
}

console.log(solve("a-((-(-(f))))"));