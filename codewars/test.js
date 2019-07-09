function func(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length/2; i++) {
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }
  return true;
}

/*function func(arr, n) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i]+arr[j] === n){
        return true;
      }
    }
  }
  return false;
}*/

console.log(func('Мало кукле дел к уколам'));

//console.log(arr.sort((a,b)=> a-b));