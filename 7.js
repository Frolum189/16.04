// <p id='p'></p>
// <button onclick='but()'></button>

let ptimer = document.getElementById('p');
function but() {
    let text = 0;
    let timer = setInterval(() => {
        ptimer.textContent = `${text}`;
        text++;

        if (text > 10) {
            clearInterval(timer);
        }
    }, 1000);

}