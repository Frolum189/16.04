// Напишите функцию checkAge(age), которая возвращает Promise.
//     Через 1 секунду:
//     •    если age >= 18, resolve с сообщением "Доступ разрешён"
// •    иначе reject с "Доступ запрещён"
// Используйте setTimeout, resolve и reject.


function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Доступ разрешен")
            }

            else {
                reject("Доступ запрещен")
            }
        }, 1000);
    });
}

checkAge(15).then(console.log).catch(console.error);
