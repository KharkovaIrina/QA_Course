/*function whoIsPaying(name) {
  let res = [];
  if (name.length > 2) {
    res.push(name, name.substr(0, 2));
  } else {
    res.push(name);
  }
  return res;
}*/

function whoIsPaying(name) {
    let res = [];
    res = (name.length > 2)? [name, name.substr(0, 2)] : [name] ;
    return res;
}

let name = 'Meggg';
console.log(whoIsPaying(name));