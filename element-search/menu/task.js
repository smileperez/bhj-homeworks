// Получаем коллецицю меню
const menu = document.getElementsByClassName("menu__link");

// // Массив только со вложенными меню
// let arrSubMenu;

// Используя цикл, регистрируем обрабочтик событий на всех менюшках.
for (let idx = 1; idx < menu.length; idx++) {

    menu[idx].onclick = function() {
        // Определяем переменную обозначающую вложенное меню.
        let menuSub = menu[idx+1].closest(".menu_sub");

        // Сначала закрываем все другие открытые вложенные меню
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].closest(".menu_active") != null) {
                menu[i].closest(".menu_sub").className = "menu menu_sub";
            }
        }

        // Если вложенное меню нашлось без класса menu_active, то добавляем класс menu_active (включаем меню при клике).
        if (menuSub.className === "menu menu_sub") {
            menuSub.className = "menu menu_sub menu_active";

        // Если вложенное меню нашлось с классом menu_active, то убираем класс menu_active (выключаем меню при клике).
        } else {
            menuSub.className = "menu menu_sub";
        }

        // Запрещаем переход по ссылке тех меню, что имеют вложенное меню.
        return false
    }
}