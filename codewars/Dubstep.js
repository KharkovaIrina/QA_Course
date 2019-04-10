function songDecoder(song){
    let regExp = /WUB/g;
    let deleteDouble = /\s{2,}/g;
    //let startEnd = /^\s|\s$/g;
    return song.replace(regExp,' ').replace(deleteDouble,' ').trim();
}

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));