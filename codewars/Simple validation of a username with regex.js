function validateUsr(username) {
    if ((username.length < 4) || (username.length > 16)) {
        return false;
    } else{
        return /^([a-z]|_|\d)+$/.test(username);
    }

}

console.log(validateUsr("Hass"));