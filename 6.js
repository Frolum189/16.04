// Напишите три функции loadA, loadB, loadC,
// каждая возвращает Promise с разным временем задержки (например, 1с, 1.5с, 2с).
// Выведите, кто загрузился первым. Используйте Promise.race.

function loadA() {
    return new Promise(resolve => {
        setTimeout(() => resolve('A'), 1000);
    });
}

function loadB() {
    return new Promise(resolve => {
        setTimeout(() => resolve('B'), 1500);
    });
}

function loadC() {
    return new Promise(resolve => {
        setTimeout(() => resolve('C'), 2000);
    });
}

Promise.race([loadA(), loadB(), loadC()]).then(result => {
        console.log('Первым загрузился:', result);
    });
