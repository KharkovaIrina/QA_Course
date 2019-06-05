/*
// way 1 - through string usage
function palindrome(num) {
  let str = num.toString();
  return (str === str.split('').reverse().join(''));
}*/

// way 2 - without string usage
function palindrome(num) {
  if (num < 10) {
    return false;
  }
  const arr = [];
  while (num > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  console.log(arr);
  for (let i = 0; i < arr.length / 2; i++) {
    console.log('steps ' + i);
    console.log(arr[i]);
    console.log(arr[arr.length - i - 1]);
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome(17071));