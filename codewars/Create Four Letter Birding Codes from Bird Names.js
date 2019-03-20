function birdCode(arr){
    let str = ''; // элемент исходного массива = название птицы = строка
    let code = ''; // код птицы = строка
    let mini = []; // элемент массива из слов в многосложном названии птицы
    let code_arr = [];
    let howLongName; // длина массива идексов всех разделителей в названии птицы = кол-во пробелов и дефисов
    for (let i = 0; i < arr.length; i++) {
        str = arr[i]; // вычленяем одну птицу
        if (str.match(/[- ]/g)) { // проверяем, есть ли в её названии разделители. ЕСЛИ TRUE, то:
            howLongName = str.match(/[- ]/g).length; // узнаём длину массива идексов всех пробелов и дефисов в названии
            mini = str.split(/[- ]/); // разбиваем название птицы в массив
            if (howLongName == 1) { //если в названии 1 разделитель(-> 2 слова)
                code_arr = mini[0].slice(0, 2).concat(mini[1].slice(0, 2));
            } else if (howLongName == 2) { // а если же в названии 2 разделителя(-> 3 слова)
                code_arr = mini[0].slice(0, 1).concat(mini[1].slice(0, 1)).concat(mini[2].slice(0, 2));
            } else { // если в названии 3 разделителя(-> 4 слова)
                code_arr = mini[0].slice(0, 1).concat(mini[1].slice(0, 1)).concat(mini[2].slice(0, 1)).concat(mini[3].slice(0, 1));
            }
            code = code_arr.toString().toUpperCase();
        } else { // ЕСЛИ FALSE = нет разделителей = название птицы из одного слова
            code = str.substr(0, 4).toUpperCase(); // отрезаем от строки-названия 4 символа и поднимаем регистр
        }
        arr.splice(i, 1, code); // в исходном массиве arr вырезаем название птицы и вставляем её код
    }
    return arr;
}

console.log(birdCode(['Black-Capped Chickadee','Woodpecker','Common Tern']));