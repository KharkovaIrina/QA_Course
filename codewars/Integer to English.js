function intToEnglish(num) {
    let numbers = {
        '0': '',
        '2': 'hundred ',
        '3': 'thousand ',
        '6': 'million ',
        '9': 'billion ',
        '12': 'trillion ',
        '15': 'quadrillion '
    };
    let tens = {
        '2': 'twenty ',
        '3': 'thirty ',
        '4': 'forty ',
        '5': 'fifty ',
        '6': 'sixty ',
        '7': 'seventy ',
        '8': 'eighty ',
        '9': 'ninety '
    };
    let digits = {
        '1': 'one ',
        '2': 'two ',
        '3': 'three ',
        '4': 'four ',
        '5': 'five ',
        '6': 'six ',
        '7': 'seven ',
        '8': 'eight ',
        '9': 'nine ',
        '10': 'ten ',
        '11': 'eleven ',
        '12': 'twelve ',
        '13': 'thirteen ',
        '14': 'fourteen ',
        '15': 'fifteen ',
        '16': 'sixteen ',
        '17': 'seventeen ',
        '18': 'eighteen ',
        '19': 'nineteen '
    };

    function tensOut(a1, a2) {
        if (a1 === '1') {
            return digits[a1 + a2];
        } else if (a1 === '0') {
            if (a2 === '0') {
                return " ";
            }
            return digits[a2];
        } else {
            if (a2 === '0') {
                return tens[a1];
            }
            return tens[a1] + digits[a2];
        }
    }

    function hundOut(subArr) {
        if (subArr[0] === '0') {
            return tensOut(subArr[1], subArr[2]);
        }
        return digits[subArr[0]] + 'hundred ' + tensOut(subArr[1], subArr[2]);
    }

    function loop(array) {
        let i = 0;
        let l = array.length;
        let sub = '';
        console.log("длина массива внутри loop: " + l);
        while (l !== 0) {
            console.log("по три цифры: " + array.slice(i, i + 3));
            if (hundOut(array.slice(i, i + 3)) !== ' '){
                sub = sub + hundOut(array.slice(i, i + 3)) + numbers[l-3];
                console.log("sub: " + sub);
            }
            l = l - 3;
            i = i + 3;

        }
        return sub;
    }

    let str = '';
    let arr = num.toString().split('');
    let l = num.toString().length;
    console.log(arr);
    console.log(l);

    if (l % 3 === 0) {
        console.log(l + ' кратно 3');
        str = str + loop(arr);
    } else if (l % 3 === 1) {
        console.log(l + ' одна лишняя');
        str = str + digits[arr[0]] + numbers[l - 1] + loop(arr.slice(1));
    } else {
        console.log(l + ' две лишних');
        console.log(arr.slice(2));
        str = str + tensOut(arr[0], arr[1]) + numbers[l - 2] + loop(arr.slice(2));
    }
    return str.trim().replace(/\s\s/g, ' ');
}

console.log(intToEnglish(12345));