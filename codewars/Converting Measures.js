function convertRecipe(recipe) {
    let regExp = /\d+(\/\d)*\stsp|\d+(\/\d)*\stbsp/g;
    function replacer(rep) {
        let str = rep.replace(/\s\D+/,'');
        console.log("Что заменяем: " + rep + ';');
        console.log("С чем работаем: " + str + ';');
        if (str.match(/\//)) {
            console.log("Элемент " + str + " - дробный");
            let arr = str.split('/');
            console.log(arr);
            str = Number(arr[0]) / Number(arr[1]);
            console.log(str);
        } else{
            console.log("Элемент " + str + " - целый;");
        }
        if (rep.match(/tsp/)){
            str = Math.ceil(str * 5);
            console.log("Переводим в граммы: " + str);
            return rep.replace('tsp', 'tsp ' + '(' + str + 'g)');
        } else{
            str = Math.ceil(str * 15);
            console.log("Переводим в граммы: " + str);
            return rep.replace('tbsp', 'tbsp ' + '(' + str + 'g)');
        }
    }
    return recipe.replace(regExp, replacer);
}

console.log(convertRecipe("Add to the mixing with 11 tbsp of olive oil & 1/8 tsp of dried dill"));