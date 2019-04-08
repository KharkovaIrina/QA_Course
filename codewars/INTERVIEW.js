/*The task is to find sum of 3 first numbers of the string and
  sum of 3 last numbers of the string, compare them.
  And if they are equal, return 'true', if not - return false'*/

function substringCompare(str) {
    let arr = str.split('');
    let sum1 = arr[0] + arr[1] + arr[2];
    let sum2 = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3];
    return (sum1 === sum2);
}

console.log(substringCompare('123456123'));

/* Given a1= ['a',2,'c',5,'d']; a2=['n',3,4]; compute the sum of digits  a1 and a2 */

let a1 = ['a', 2, 'c', 5, 'd'];
let a2 = ['n', 3, 10];

function sumOfDigits(a1, a2) {
    let checkType = (sum, elm) => {
        if (typeof elm == 'number') {
            sum = sum + elm;
        }
        return sum;
    };
    let sum1 = a1.reduce(checkType, 0);
    let sum2 = a2.reduce(checkType, 0);
    return sum1 + sum2;
}
console.log(sumOfDigits(a1, a2));

