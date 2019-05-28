function enc(text) {
    const odd = [];
    const even = [];
    for (let i = 0; i < text.length; i += 2) {
        odd.push(text[i]);
        even.push(text[i + 1]);
    }
    return even.join('') + odd.join('');
}

function encrypt(text, n) {
    if (text === null){
        return null;
    }
    if (n === 0) {
        return text;
    } else {
        while (n > 0) {
            text = enc(text);
            n--;
        }
    }
    return text;
}

function dec(encryptedText) {
    const arr = encryptedText.split('');
    const res = [];
    let odd = arr.slice(0, Math.floor(arr.length / 2));
    let even = arr.slice(Math.floor(arr.length / 2));
    if (arr.length % 2) {
        while (odd.length > 0) {
            res.unshift(even.pop());
            res.unshift(odd.pop());
        }
        res.unshift(even.pop());
    } else {
        while (even.length > 0) {
            res.unshift(odd.pop());
            res.unshift(even.pop());
        }
    }
    return res.join('');
}

function decrypt(encryptedText, n) {
    if (encryptedText === null){
        return null;
    }
    if (n === 0) {
        return encryptedText;
    } else {
        while (n > 0) {
            encryptedText = dec(encryptedText);
            n--;
        }
    }
    return encryptedText;
}

console.log(encrypt('abcdef', 1));

console.log(decrypt('bdfaceg', 1));