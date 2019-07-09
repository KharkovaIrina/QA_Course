/*function applyForVisa(documents, resolve) {
    console.log('Process the application...');
    setTimeout(() => {
        let visa = {};
        resolve(visa);
    }, 2000)
}

applyForVisa({}, function () {
    console.log('Visa has accepted');
});*/


function waitForTheText() {
    console.log('Wait for result...');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve('Сообщение успех из функции') : reject('Сообщение провал из функции');
        }, 2000);
    });
}

waitForTheText()
    .then(value => console.log(value))
    .catch( reason => console.log(reason));
