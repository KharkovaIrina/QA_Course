function bump(x) {
    if (x.match(/n/g) !== null){
        if (x.match(/n/g).length > 15){
            return 'Car Dead';
        }
    }
    return 'Woohoo!';
}

console.log(bump("______n___n_"));