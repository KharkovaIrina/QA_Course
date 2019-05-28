function alphabetPosition(text) {
    const res = [];
    text = text.replace(/[^a-zA-Z]/g,'');
    text = text.toLowerCase();
    for (let l = 0; l < text.length - 1; l++) {
        res.push(text.charCodeAt(l) - 96);
    }
    return res.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));