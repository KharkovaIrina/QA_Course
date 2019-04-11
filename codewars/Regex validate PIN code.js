function pinCode (str){
 return /^\d{4}$|^\d{6}$/.test(str);
}
console.log(pinCode("1269"));