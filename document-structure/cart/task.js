const decreaseButtons = document.querySelectorAll('.product__quantity-control_dec');
const counters = document.querySelectorAll('.product__quantity-value');
const increaseButtons = document.querySelectorAll('.product__quantity-control_inc');
const addButtons = document.querySelectorAll('.product__add');
const cartList = document.querySelector('.cart__products');

// Контроллер управления всеми кнопками УМЕНЬШЕНИЯ количества
for (let idx = 0; idx < decreaseButtons.length; idx++) {

    decreaseButtons[idx].onclick = function() {
        let n = decreaseButtons[idx].closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText;
        n--;
        // Если n меньше одного, то делаем все равно 1.
        if (n < 1) {
            n = 1;
        }
        counters[idx].innerText = n;
    }
}

// Контроллер управления всеми кнопками УВЕЛИЧЕНИЯ количества
for (let jdx = 0; jdx < increaseButtons.length; jdx++) {
    
    increaseButtons[jdx].onclick = function() {
        let n = increaseButtons[jdx].closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText;
        n++;
        counters[jdx].innerText = n;
    }
}

// Контроллер управления всеми кнопками ДОБАВЛЕНИЯ товара в корзину
for (let kdx = 0; kdx < addButtons.length; kdx++) {

    addButtons[kdx].onclick = function() {

        // Создаем главный блок продукта в корзине
        let cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        // Добавляем к этому продукту его артикул
        let dataId = addButtons[kdx].closest('.product').getAttribute('data-id');
        cartProduct.setAttribute('data-id', dataId);

        // Создаем блок с фотографией продукта
        let cartProductImage = document.createElement('img');
        cartProductImage.className = 'cart__product-image';
        // Вычисляем адрес картинки товара
        let img = addButtons[kdx].closest('.product').querySelector('.product__image').getAttribute('src');
        cartProductImage.setAttribute('src', img);

        // Создаем блок с количеством продукта
        let cartProductCount = document.createElement('div');
        cartProductCount.className = 'cart__product-count';
        // Высчитываем требуемое количество продуктов в корзине
        let n = addButtons[kdx].closest('.product').querySelector('.product__quantity-value').innerText;
        // Записываем полученное требуемое количество товара в блок корзины
        cartProductCount.innerText = n;


        // Собираем из конструктора полноценную карточку товара
        cartProduct.insertAdjacentElement('afterbegin', cartProductImage);
        cartProduct.insertAdjacentElement('beforeend', cartProductCount);

        // Получаем список всех товаров к корзине
        let cartProducts = document.querySelectorAll('.cart__product');
        let cartProductsArr = [];
        for(let i in cartProducts) cartProductsArr[i] = cartProducts[i];
        console.log(cartProductsArr);

        // Проверка на наличие товара в корзине
        let counter = null;

        function findProduct(element, idx) {
            if (element.getAttribute('data-id') == dataId) {
                counter = idx;
                console.log('Цикл проверки товара: Такой товар нашелся в корзине')
            } else {
                console.log('Цикл проверки товара: Такого товара не нашлось в корзине')
            }
        }
        cartProductsArr.find(findProduct);


        // Так как товара не нашлось (null) то добавляем новый товар в корзину
        if (counter === null) {
            // Так как такого товара в корзине еще не было, то 
            // Добавляем полноценную карточку товара в корзину
            cartList.insertAdjacentElement('beforeend', cartProduct);
            console.log('Корзина: Такого товара еще не было в корзине - добавляем его');
            // Не забываем обнулить флаг
            counter = null;
        // Так как товар нашел в корзине (!= null), то только изменяем его количество
        } else {
            // Так как товар с таким же артикулом нашелся, то изменяем его количество
            let newN =  cartProducts[counter].querySelector('.cart__product-count').innerText;
            newN = Number(newN) + Number(n);
            cartProducts[counter].querySelector('.cart__product-count').innerText = newN;
            console.log('Корзина: Такой товар уже есть в корзине, изменяем его количество');
        }
    }
}