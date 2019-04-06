function bus(busStops) {
    let count = 0;
    for (let i = 0; i < busStops.length; i++) {
        count = count + busStops[i][0] - busStops[i][1];
    }
    return count;
}

console.log(bus([[10, 0], [3, 5], [5, 8]]));