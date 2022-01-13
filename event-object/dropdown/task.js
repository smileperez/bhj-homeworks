// Находим коллекцию всех кнопок
const dropDownBtns = document.getElementsByClassName("dropdown__value");

// Находим все вложенные списки в кнопках
// Для этого сформируем массив и воткнем в него все найденные вложенные списки
let dropDownMenus = [];
for (let idx = 0; idx < dropDownBtns.length; idx++) {
    dropDownMenus.push(dropDownBtns[idx].closest(".dropdown").querySelector(".dropdown__list"));
}

// Находим все элементы внутри списка
// Для этого сформируем массив и воткнем в него все найденные коллекции ссылок
let dropDownItems = [];
for (let idx = 0; idx < dropDownBtns.length; idx++) {
    dropDownItems.push(dropDownBtns[idx].closest(".dropdown").querySelectorAll(".dropdown__link"));
}

// Устанавливаем обработчики событий на все кнопки
for (let idx = 0; idx < dropDownBtns.length; idx++) {
    // Для контроля открыто/закрыто введем флаг [false = default / true]
    let flag = false;

    dropDownBtns[idx].onclick = function() {
        // Если флаг false - то откроем меню. Если флаг true - то закроем меню.
        if (flag === false) {
            dropDownMenus[idx].className = "dropdown__list dropdown__list_active";
            flag = true;
        } else {
            dropDownMenus[idx].className = "dropdown__list";
            flag = false;
        }
    }
}

// Устанавливаем обработчики событий на все ссылки во всех подменю
for (let idx = 0; idx < dropDownItems.length; idx++) {
    for (let jdx = 0; jdx < dropDownItems[idx].length; jdx++) {

        dropDownItems[idx][jdx].onclick = function() {
            // Меняем название основной кнопки по имени кликнутой ссылки
            dropDownBtns[idx].innerHTML = getBtnName(idx, jdx);
            return false;
        }

    }
}

// Вспомогательная функция для получения имени кнопки
function getBtnName(idx, jdx) {
    let targetBtnName = dropDownItems[idx][jdx].innerHTML;
    return targetBtnName;
}


