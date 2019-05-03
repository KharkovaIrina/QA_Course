function grow(x){
    return x.reduce((mul, elm)=>{
        return mul = mul*elm;
    });
}

console.log(grow([4, 1, 1, 1, 4]));