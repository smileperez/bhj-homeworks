// Создаем константу и записываем коллекцию элементов с классом 'modal'
const elementsModal = document.getElementsByClassName('modal');

// В коллекции элементов находим первое модальное окно и добавляем класс, для показа первого модального окна
elementsModal.item(0).className = "modal modal_active";

// Создаем константу и записываем коллекцию элементов кнопок-закрытия с классом 'modal__close'
const elementsButtonsClose = document.getElementsByClassName('modal__close');

// С помощью цикла создаем УНИВЕРСАЛЬНЫЙ обработчик событий для "крестиков" для закрытия модальных окон
for (let idx = 0; idx < elementsButtonsClose.length; idx++) {
    elementsButtonsClose[idx].onclick = function() {
        this.closest(".modal_active").className = "modal";
    }
}

// Создаем обрабочик на клик кнопки "Сделать хорошо" для первого модального окна, открываем второе модальное окно
elementsButtonsClose.item(1).onclick = function() {
    elementsModal.item(0).className = "modal";
    elementsModal.item(1).className = "modal modal_active";
    };

// Создаем константу и записываем коллекцию элементов с классом 'btn_success'
const elementsButtonsSuccess = document.getElementsByClassName('btn_success');

// Создаем обрабочик на клик кнопки "Хорошо сделано!" для закрытия второго модального окна
elementsButtonsSuccess.item(0).onclick = function() {
    elementsModal.item(1).className = "modal";
    };