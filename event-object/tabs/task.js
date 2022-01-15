// Находим все вкладки и помещаем в массив
const tabs = Array.from(document.querySelector(".tabs").querySelectorAll(".tab"));

// Находим все контенты и помещаем в массив
const contents = Array.from(document.querySelector(".tab__contents").querySelectorAll(".tab__content"));


// Устанавливаем обработчик событий на все вкладки.
for (let idx = 0; idx < tabs.length; idx++) {

    tabs[idx].onclick = function() {
    
        // Стереть все текущие активные вкладки и активные контенты
        for (let jdx = 0; jdx < tabs.length; jdx++) {
            tabs[jdx].className = "tab";
            contents[jdx].className = "tab__content";
        }

        // Переключить вкладку
        tabs[idx].className = "tab tab_active";
        // Переключить контент
        contents[idx].className = "tab__content tab__content_active";

        console.log(`Нажали на вкладку "${tabs[idx].innerText}"`)
    }

}