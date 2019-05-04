function isLockNessMonster(s) {
    return /tree fiddy|3.50|three\w*fifty/.test(s);
}

console.log(isLockNessMonster("Did I ever tell you about my run with that paleolithic beast? He tried all sorts of ways to get at my three dolla and fitty cent? I told him 'this is MY 4 dolla!'. He just wouldn't listen."));