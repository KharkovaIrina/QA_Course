function warnTheSheep(arr) {
    let wolfIndex = arr.indexOf("wolf");
    if (wolfIndex === arr.length - 1) {
        return 'Pls go away and stop eating my sheep';
    }
    let sheepIndex = arr.length - wolfIndex - 1;
    return 'Oi! Sheep number ' + sheepIndex + '! You are about to be eaten by a wolf!';
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));