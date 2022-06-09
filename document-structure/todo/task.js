// Ищем инпут для ввода названия задачи
const taskInput = document.getElementById('task__input');
// Ищем кнопку для добавления задачи
const buttonInput = document.getElementById('tasks__add');
// Ищем список всех задач
const tasksList = document.getElementById('tasks__list');

// Вешаем событие на кнопку отправки задачи в список по клику
buttonInput.addEventListener('click', () => {

    // создаем общий div задачи
    let task = document.createElement('div');
    task.className = 'task';

    // отдельно создаем блок темы задачи
    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.innerText = taskInput.value;

    // отдельно создаем блок кнопки закрытия
    let taskRemove = document.createElement('a');
    taskRemove.className = 'task__remove';
    taskRemove.innerText = '×';
    taskRemove.href = '#';

    // Собираем из конструктора правильный блок задачи
    task.insertAdjacentElement('afterbegin', taskTitle);
    task.insertAdjacentElement('beforeend', taskRemove);

    
    // Проверка на пустое название задачи
    if (checkSpace(taskInput) == false) {
        // Если инпут не пустой, то добавляем созданную задачу в список
        tasksList.insertAdjacentElement('afterbegin', task);

        // При добавлении задачи, устанавливаем обработчик событий на кнопку удаления задачи
        task.querySelector('.task__remove').onclick = function() {
            // Если кликнули на кнопку удаления задачи - то удалить данную задачу
            task.remove();
        }

    } else {
        console.error(`Задача не может быть без названия`);
    }

    // Очистка инпута после отправки задачи в список
    taskInput.value = '';

});

// Вспомогательная функция проверки текста на пустоту и пробелы
function checkSpace(text) {

    // Отсекаем всевозможные пробелы
    text.value = text.value.trim();

    // Проверяем на пустоту. Если пусто, то true
    if (text.value == '') {
        return true;
    } 
    
    // Если не пусто, то false
    return false;
};


