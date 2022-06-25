const loader = document.querySelector('.loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

// Устанавливаем тип данных на JSON, чтобы не было просто текста
xhr.responseType = 'json';

// Формируем и итправляем GET запрос на сервер
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

// Подписываемся на событие окончания загрузки данных
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        // Как только данные загружены, скрываем 
        loader.classList.toggle('loader_active');
        
        // Запишем полученны данные с сервера в объект currency
        let currency = xhr.response.response.Valute;

        // Переберем объект и запишем данные в блоки div, блоки div установим последовательно 
        Object.keys(currency).forEach(key => {

            // Главный блок <item>
            let item = document.createElement('div');
            item.className = 'item';

            // Данные блока <item>
            let itemCode = document.createElement('div');
            itemCode.className = 'item__code';
            itemCode.innerText = currency[key].CharCode;
            let itemValue = document.createElement('div');
            itemValue.className = 'item__value';
            itemValue.innerText = currency[key].Value;
            let itemCurrency = document.createElement('div');
            itemCurrency.className = 'item__currency';
            itemCurrency.innerText = 'руб.';

            // Собираем все данные в единый блок <item>
            item.insertAdjacentElement('beforeend', itemCode);
            item.insertAdjacentElement('beforeend', itemValue);
            item.insertAdjacentElement('beforeend', itemCurrency);

            // Доабвляем <item> в общую верстку
            items.insertAdjacentElement('beforeend', item);

        });
    }
})



 

 



