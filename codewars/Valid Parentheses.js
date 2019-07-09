/*function validParentheses(par) {
    let begin = 0;
    let end = 0;
    for (let i = 0; i < par.length; i++) {
        par[i] === '(' ? begin++ : end--;
    }
    if (par.lastIndexOf('(') > par.lastIndexOf(')')) {
        return false;
    }
    return begin + end === 0;
}*/

function validParentheses(str) {

  const arr = [];
  if (typeof str !== 'string') {
    console.log("false 1");
    return false;
  }
  /*if (str.length % 2) {
    console.log("false 2");
    return false;
  }*/
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      arr.push(str[i]);
      console.log(arr);
    } else if (str[i] === ')') {
      let p = arr.pop();
      console.log('p ' + p);
      if (p !== '(') {
        console.log("false 3");
        return false;
      }
    } else if (str[i] === ']') {
      let p = arr.pop();
      if (p !== '[') {
        console.log("false 4");
        return false;
      }
    } else if (str[i] === '}') {
      let p = arr.pop();
      if (p !== '{') {
        console.log("false 5");
        return false;
      }
    }
  }
  if(arr.length > 0){
    console.log("false 6");
    return false;
  }
  return true;
}

str = "{[()]}";
console.log(validParentheses("{[()]})"));