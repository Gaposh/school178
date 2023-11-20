function toggleCartStatus(){


    const cartWrapper  = document.querySelector('.cart-wrapper');

    const orderForm = document.querySelector('#order-form')

    const cartEmptyBadge  = document.querySelector('[data-cart-empty]');

    if(cartWrapper.children.length >  0 ){
        console.log('Full')

        cartEmptyBadge.classList.add('none')


        orderForm.classList.remove('none')


    }
    else{
        console.log('Empty')

        cartEmptyBadge.classList.remove('none')

        orderForm.classList.add('none')

    }


}