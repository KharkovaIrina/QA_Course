function tickets(arr) {
    let sum = 0;
    let count25 = 0;
    let count50 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 25) {
            count25++;
            sum = sum + 25;
        } else if (arr[i] === 50) {
            if (count25 === 0) {
                return 'NO';
            } else {
                count50++;
                count25--;
                sum = sum + 25;
            }
        } else {
            if (count25 === 0) {
                return 'NO';
            } else if (sum < 75) {
                return 'NO';
            } else if (count50 !== 0) {
                count50--;
                count25--;
                sum = sum - 75;
            } else {
                count25 = count25 - 3;
                sum = sum - 75;
            }
        }
    }
    return 'YES';
}

console.log(tickets([25, 25, 50]));