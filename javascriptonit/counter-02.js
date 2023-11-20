
//Добавляме прослушку на всем окне 
window.addEventListener('click' , function(event){


    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){


    
                // Находим обертку счетчика 

                let counterWrapper   = event.target.closest('.counter-wrapper');

                // Находим ДИВ с числом счетчика 
            
                let counter = counterWrapper.querySelector('[data-counter]')
            
                // Проверяем является ли элемент кнопкой Плюс 
                if(event.target.dataset.action ==='plus'){


            
                    

                    counter.innerText = ++counter.innerText

                }

                // Проверяем является ли элемент кнопкой Минус
                if(event.target.dataset.action ==='minus'){

                    

                    if(parseInt(counter.innerText) > 1 ){
                        counter.innerText = --counter.innerText
                
                    }

                    //Проверка на товар который наъодится в корзине 
                    else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) ===1  ){
                        
                        //Удаляем товар из корзины
                        const lel = event.target.closest('.cart-item')
                        lel.remove();
                        
                        //Отображение статуса корзины
                        toggleCartStatus()


                        //Пересчет общей стоимости товаров в корзине 
                        calcCartPrice()



                    }

                }



                //Проверяем клик на + или - внутри корзины 

                if (event.target.hasAttribute('data-action')  &&  event.target.closest('.cart-wrapper')){

                    //Пересчет общей стоимости товаров в корзине 
                    calcCartPrice()


                }

    }
})