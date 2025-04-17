// Напишите функцию sayHello(name),
// которая возвращает промис и через 2 секунды выводит Привет, ${name}!.

function sayHello(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Привет, ${name}");
        }, 2000);
    })
}

sayHello("Vasya");