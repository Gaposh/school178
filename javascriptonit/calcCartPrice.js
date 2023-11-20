function calcCartPrice(){
    const cartWrapper = document.querySelector('.cart-wrapper')

    const totalPriceEl = document.querySelector('.total-price')


    const cartItems = document.querySelectorAll('.cart-item')

    const deliveryCost = document.querySelector('.delivery-cost')

    const cartDelivery = document.querySelector('[data-cart-delivery]')


    //Общая стоимость товаров 
    let totalPrice = 0; 


    //Обходим все блоки с ценами в корзине 
    cartItems.forEach(function (item){

        //Находим количество товаров 
        const amountAll = item.querySelector('[data-counter]');

        const priceEl  = item.querySelector('.price__currency');
 
        const currentPrice =  parseInt(amountAll.innerText) * parseInt(priceEl.innerText)

        //Подсчет общей стоимости товаров в корзине 
        totalPrice += currentPrice

    })


    //Отображаем цену на странице в корзине
    totalPriceEl.innerText = totalPrice

    //Скрываем /Показываем блок со стоимостью доставки 
    if( totalPrice > 0 ){
        cartDelivery.classList.remove('none')


    } else{
        cartDelivery.classList.add('none')

    }

    if(totalPrice >= 3000){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = "бесплатно"

    }
    else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = "1200 tg"
    }

}