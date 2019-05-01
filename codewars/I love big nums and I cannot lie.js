function biggest(nums) {
    nums.sort().reverse();
    console.log(nums);
    if (nums.every(elm => elm === 0)) {
        return '0';
    }
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            console.log("индекс i: " + i); console.log("индекс j: " + j);
            let a = nums[i].toString();
            let b = nums[j].toString();
            console.log("a: " + a); console.log("b: " + b);
            if (a.charAt(0) === b.charAt(0) && a.length < b.length) {
                if (a + b > b + a) {
                    console.log(a + b); console.log(b + a);
                    let k = nums[j];
                    nums[j] = nums[i];
                    nums[i] = k;
                    console.log(nums);
                }
            }
        }
    }
    return nums.join('');
}
console.log(biggest([3803, 38, 380]));