function removeExcl(str, n){
    while(n!==0 && str.includes('!')){
        str = str.replace('!', '');
        n--;
    }
    return str;
}

console.log(removeExcl("Hi!!!",1));