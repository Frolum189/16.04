// Напишите функцию collectItems(items), которая выводит в консоль
// элементы массива items, по одному в секунду, с помощью async/await.



async function colleсtItems(items){
    for (let i = 0; i < items.length; i++) {
        console.log(items[i])
    await new Promise(res => setTimeout(res,1000))
    }}

colleсtItems([1,2,3,4,5]);