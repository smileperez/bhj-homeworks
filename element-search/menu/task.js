// Получаем коллекцию из вложенных меню <ul>.
const menuSub = document.getElementsByClassName("menu_sub");

// Находим ссылки <a> у которых существует подменю.
// Создадим массив, для записи в него всех найденных ссылок <a> у которых существует подменю.
let menuSubLinks = [];
// Переберем все вложенные меню <ul>, найдем их родителей <li class="menu__item"> и у этих родителей найдем ссылки <a>
for (let idx = 0; idx < menuSub.length; idx++) {
    // Находим у вложенных меню родителя, а у родителя находим ссылки. Пихаем в массив.
    menuSubLinks.push(menuSub[idx].closest(".menu__item").querySelector(".menu__link"));
    
    // Ставим обработчик событий на найденные ссылки.
    menuSubLinks[idx].onclick = function() {
        
        let openedMenuSub;
        // Пытаемся найти уже открытое меню и закрыть его
        for (let i = 0; i < menuSubLinks.length; i++) {
            // Если находим открытое меню - закрываем его!
            if (menuSub[i].className.includes("menu_active")) {
                // Закрываем!
                menuSub[i].className = "menu menu_sub";
                console.log(`Закрыли меню ${i}`);
                // Зафиксировали ранее закрытое меню
                openedMenuSub = i;
            }
        }

        // Проверяем, а какое именно меню мы открываем?
        if (idx != openedMenuSub) {
            // Открываем кликнутое меню
            menuSub[idx].className = "menu menu_sub menu_active";
            console.log(`///---///`);
            console.log(`Открыли меню ${idx}`);
            
            // Запрещаем обновление страницы
            return false;
        } else {
            // Запрещаем обновление страницы
            return false
        }

    }
}