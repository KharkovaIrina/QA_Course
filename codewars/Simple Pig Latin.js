function pigIt(str) {
    let arr = str.split(' '); //разделили предложение на слова со знаками препинания
    console.log(arr);
    let word = [];
    let final = '';
    for (let i = 0; i < arr.length; i++) {
        let mark = '';
        word = (arr[i].split('')); //разделили слово на символы
        console.log(word);
        let len = word.length; // длина слова = длина массива символов
        if (word[len - 1].match(/[,!:.?]/)) { // если последний символ слова - знак
            if (len == 1) { // и слово состоит только из этого знака, то
                return final + word.join(''); // просто добавляем его к результату и выходим
            } else {
                mark = word.pop(); // и слово состоит не только из знака отрезаем знак
                console.log(mark);
            }
        }
        let first = word.shift();
        word.push(first + 'ay' + mark);
        console.log(word);
        let rev = word.join('');
        console.log(rev);
        final = final + rev + ' ';
    }
    return final.trim();
}
let str1 = 'Hello, world !'
let str2 = 'O tempora , o mores !'
console.log(pigIt(str2));