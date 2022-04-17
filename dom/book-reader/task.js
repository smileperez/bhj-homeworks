// Получаем коллекцию элементов управления размером шрифта
const sizeControls = document.querySelectorAll('.book__control_font-size a');
// Получаем коллекцию элементов управления размером шрифта
const colorControls = document.querySelectorAll('.book__control_color a');
// Получаем коллекцию элементов управления размером шрифта
const backgroundControls = document.querySelectorAll('.book__control_background a');
console.log(backgroundControls);
// Получаем контент
const content = document.querySelector('.book__content');


// Вспомогательная функция поиска активного элемента
function searchActive(collection, activeClass) {
    for (idx = 0; idx < collection.length; idx++) {
        if (collection[idx].classList.contains(activeClass) === true) {
            return idx;
        }
    }
}


// Создаем универсальную функцию "конроллера интерфейса"
// В параметрах указываем коллекцию элементов управления, контент, название активного класса, и 3 параметра - классы для переключения.
function control(collection, content, activeClass, param1, param2, param3) {

    // На каждую кнопку управления (в коллекции) подписываем событие по клику мыши
    for (let idx = 0; idx < collection.length; idx++) {
        // Создаем обрабочик событий по клику на кнопку управления.
        collection[idx].onclick = function() {
            
            // Ищем текущий активный элемент
            let active = searchActive(collection, activeClass);
            // Меняем классы на текуую актиную кнопку, со старой кнопки класс подтираем.
            collection[active].classList.toggle(activeClass);
            collection[idx].classList.toggle(activeClass);

            // Реализуем действия в зависимости от номера кнопки
            switch(idx) {
                case 0:
                    // Очищаем все классы
                    content.classList.remove(param1, param2, param3);
                    // Добавляем нужный
                    content.classList.add(param2);
                    break;
                case 1:
                    content.classList.remove(param1, param2, param3);
                    content.classList.add(param3);
                    break;
                case 2:
                    content.classList.remove(param1, param2, param3);
                    content.classList.add(param1);
                    break;
                default:
                    alert('Проблема');
            }
            // Добавляем return false для того, что переход по ссылке не перезагружал страницу
            return false;
        }
    }
}

// Запускаем управление
// Управление размером шрифтов ()
control(sizeControls, content, 'font-size_active', 'book_fs-big', 'book_fs-small');
// Управление цветом шрифта ()
control(colorControls, content, 'color_active', 'book_color-whitesmoke', 'book_color-black', 'book_color-gray');
// Управление цветом фона ()
control(backgroundControls, content, 'color_active', 'book_bg-white', 'book_bg-black', 'book_bg-gray');