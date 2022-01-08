// Создаем константу и записываем коллекцию элементов с классом 'modal'
const elementsModal = document.getElementsByClassName('modal');
// В коллекции элементов находим первое моадльное окно и добавляем класс, для показа модального окна
elementsModal.item(0).className = "modal modal_active";

// Создаем константу и записываем коллекцию элементов кнопок-закрытия с классом 'modal__close'
const elementsButtonsClose = document.getElementsByClassName('modal__close');

// Создаем обрабочик на клик кнопки закрытия для первого модального окна
elementsButtonsClose.item(0).onclick = function() {
    elementsModal.item(0).className = "modal";
    };

// Создаем обрабочик на клик кнопки "Сделать хорошо" для первого модального окна, открываем второе модальное окно
elementsButtonsClose.item(1).onclick = function() {
    elementsModal.item(0).className = "modal";
    elementsModal.item(1).className = "modal modal_active";
    };

// Создаем обрабочик на клик кнопки закрытия для второго модального окна
elementsButtonsClose.item(2).onclick = function() {
    elementsModal.item(1).className = "modal";
    };

// Создаем константу и записываем коллекцию элементы с классом 'btn_success'
const elementsButtonsSuccess = document.getElementsByClassName('btn_success');

// Создаем обрабочик на клик кнопки "Хорошо сделано!" для закрытия второго модального окна
elementsButtonsSuccess.item(0).onclick = function() {
    elementsModal.item(1).className = "modal";
    };