function meeting(x, need) {
    let res = [];
    if (need) {
        for (arr of x) {
            if (need !== 0) {
                if (arr[1] < arr[0].length) {
                    res.push(0);
                } else {
                    let chair = arr[1] - arr[0].length;
                    if(chair >= need){
                        res.push(need);
                        need = 0;
                    } else {
                        res.push(chair);
                        need = need - chair;
                    }
                }
            } else {
                break;
            }
        }
        if (need > 0) {
            return 'Not enough!';
        } else {
            return res;
        }
    }
    return 'Game On';
}

console.log(meeting([ [ [ 'X', 'X', 'X', 'X' ], 8 ],
    [ [ 'X', 'X', 'X' ], 7 ],
    [ [ 'X', 'X' ], 4 ] ], 3));