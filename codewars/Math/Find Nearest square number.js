function nearestSq(n) {
    for (let i = 1;;) {
        if (Math.sqrt(n) % 1 == 0) {
            return n;
        } else if (Math.sqrt(n - i) % 1 == 0) {
            return n - i;
        } else if (Math.sqrt(n + i) % 1 == 0) {
            return n + i;
        } else {
            i++;
        }
    }
}
console.log(nearestSq(111));