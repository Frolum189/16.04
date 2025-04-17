// Напишите prompt()-функцию getName(), которая возвращает промис.
// Если пользователь ввёл имя, resolve с этим именем, иначе reject с сообщением "Имя не введено".

function getName() {
    let input = prompt("Введите имя:")
    return new Promise((resolve, reject) => {
        if (input) {
            resolve(input);
        } else {
            reject("Имя не введено");
        }
    })
}

getName().then(console.log).catch(console.error);


