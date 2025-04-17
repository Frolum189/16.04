// Напишите три async-функции step1(), step2(), step3() —
// каждая возвращает Promise, выводящий сообщение через 1 секунду.
// Создайте функцию runAllSteps(), которая вызывает их по порядку с задержкой между шагами.

async function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1");
            resolve();
        }, 1000);
    })
}

async function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("2");
            resolve();
        }, 1000);
    })
}

async function step3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("3");
            resolve();
        }, 1000);
    })
}


async function runAllSteps() {
    await step1();
    await step2();
    await step3();
}

runAllSteps().then(() => {console.log("Все функции вызваны");})