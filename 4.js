// Сделайте 3 блока.
// При клике на кнопку они последовательно меняют цвет с задержкой в 1 секунду между каждым.

// <button onclick='but()'></button>
// <div id="container">
//     <div class="block"></div>
//     <div class="block"></div>
//     <div class="block"></div>
// </div>


let blocks = document.querySelectorAll('.block');

async function but(){
    for (let i = 0; i < blocks.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        blocks[i].style.backgroundColor = 'skyblue';
}}