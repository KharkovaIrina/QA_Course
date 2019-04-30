function likes(names) {
    let l = names.length;
    let count = l - 2;
    let answer = {
        0: "no one likes this",
        1: names[0] + " likes this",
        2: names[0] + " and " + names[1] + " like this",
        3: names[0] + ", " + names[1] + " and " + names[2] + " like this",
        default: names[0] + ", " + names[1] + " and " + count + " others like this"
    };
    return answer[l];
    /*if (l === 0) {
        return "no one likes this";
    } else if (l === 1) {
        return names[0] + " likes this";
    } else if (l === 2) {
        return names[0] + " and " + names[1] + " like this";
    } else if (l === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
        let count = l - 2;
        return names[0] + ", " + names[1] + " and " + count + " others like this";
    }*/
}

console.log(likes(['Peter']));

