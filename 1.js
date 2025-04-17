// При нажатии кнопки запускается обратный отсчёт от 5 до 1, каждую секунду.
// Необходимо использовать setTimeout или setInterval.

// <p id='p'></p>
// <button onclick='but()'></button>

let ptimer = document.getElementById('p');
function but() {
    let text = 5;
    let timer = setInterval(() => {
        ptimer.textContent = `${text}`;
        text--;

        if (text === 0) {
            clearInterval(timer);
        }
    }, 1000);

}