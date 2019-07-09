//Есть ли повторы в массиве?

/*function func(arr) {
  const obj = {};
  for (let elm of arr) {
    if(obj[elm] === undefined){
      obj[elm] ++;
    } else{
      return true;
    }
  }
  return false;
}*/
/*function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return true;
    }
  }
  return false;
}*/

function func(arr) {
  let set = new Set(arr);
  return set.size !== arr.length;
}



const arr = [88, 4, 5, 7];
console.log(func(arr));

