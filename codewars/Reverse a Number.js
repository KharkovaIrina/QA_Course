function revNum(number) {
  if(number === 0){
    return 0;
  }
  let res = '';
  let str = number.toString();
  str = str.replace(/0*$/,'');
  const arr = str.split('');
  if(arr[0] === '-'){
    res += arr.shift();
  }
  res += arr.reverse().join('');
  number = Number(res);
  if(number > (Math.pow(2,31) - 1) || (number < -Math.pow(2,31)) ){
    return 0;
  }
  return number;
}

console.log(revNum(123));