// При нажатии на кнопку появляется слово "Загрузка...".
// Через 2 секунды заменяется на "Готово!".
// Ещё через 1 секунду — очищается.

// <p id='p'></p>
// <button onclick='but()'></button>

let p = document.getElementById('p');
function but() {
    p.textContent = 'Загрузка...'
    setTimeout(() => {
        p.textContent = 'Готово!'
        setTimeout(() => {
            p.textContent = ''
        }, 1000)
    }, 2000)

}