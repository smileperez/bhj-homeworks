// Находим все чекбоксы
const allCheckbox = document.querySelectorAll('.interest__check');

// Создаем функцию смены чекбокса
const switchCheckbox = function() {
    // Ищем коллекцию дочерних чекбоксов под главным чекбоксом
    const activeCheckbox = this.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check');

    // Очищаем все дочерние чекбоксы
    for ( const checkbox of activeCheckbox ) {
        checkbox.removeAttribute('checked');
    }

    // Если главный чекбокс активирован, то активируем все дочерние чекбоксы
    if (this.checked == 1) {
        for ( const checkbox of activeCheckbox ) {
            checkbox.setAttribute('checked', 'checked');
        }
    }
}

// Подписываемся на события клика на каждый чекбокс   
for ( const checkbox of allCheckbox ) {
    checkbox.addEventListener('click', switchCheckbox);
}

