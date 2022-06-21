// Найдем в коллекцию весь текст требующий подсказики
const hasToolkit = document.querySelectorAll('.has-tooltip');

// Создадим подсказку для каждого текстового элемента и установим в разметку после текствого элемента
for (let idx = 0; idx < hasToolkit.length; idx++) {
    // Создаем элементы подсказки с нужной темой
    let tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = hasToolkit[idx].getAttribute('title');;
    
    // Добавляем созданные подскази в разметку.
    hasToolkit[idx].insertAdjacentElement('afterEnd', tooltipElem);
}

// Найдем все созданные подсказки
const toolkits = document.querySelectorAll('.tooltip');
console.log(toolkits);



// Триггеруем добавление/убавление класса видимости подсказки на каждую подсказку
for (let idx = 0; idx < hasToolkit.length; idx++) {

    // let activeFlag = 0;
    // Устанавливаем событие на клик
    hasToolkit[idx].onclick = function() {

        // if (activeFlag == 1) {
        //     toolkits[idx].classList.toggle("tooltip_active");
        //     activeFlag = 0;
        // }
        
        // Саначала скрываем все подсказки при клике на любую подсказку.
        // closeToolkits();
        // toolkits[idx].classList.toggle("tooltip_active");

        
       

        // for (let jdx = 0; jdx < hasToolkit.length; jdx++) {
        //     if (toolkits.find(findClass(jdx))) {
        //         console.log(`нашли класс в ${jdx}`);
        //         return false;
        //     } else {
        //         console.log(`нигде не нашли такой класс`);
        //         return false;
        //     }
        // }

        // function findClass(jdx) {
        //     toolkits[jdx].classList.contains("tooltip_active");
        // }

        // Позиционируем подсказку, для этого находим координаты куда установить подсказку.
        let coords = hasToolkit[idx].getBoundingClientRect();
        let left = coords.left;
        let top = coords.top + 20;

        // Записываем нужные координаты в подсказку
        toolkits[idx].style.left = left + 'px';
        toolkits[idx].style.top = top + 'px';
        
        // Включаем активную подсказку при клике
        // toolkits[idx].classList.toggle("tooltip_active");

        if (toolkits[idx].classList.contains("tooltip_active")) {
            for (let jdx = 0; jdx < hasToolkit.length; jdx++) {
                toolkits[jdx].classList.remove("tooltip_active");
            }
        } else {
            for (let jdx = 0; jdx < hasToolkit.length; jdx++) {
                toolkits[jdx].classList.remove("tooltip_active");
            }
            toolkits[idx].classList.toggle("tooltip_active");
        }

        return false;


       
    }
}

// При любом скролле убираем все подсказки из виду
window.addEventListener('scroll', function() {
    closeToolkits();
});

// Вспомогательная функция закрытия всех подсказок
function closeToolkits() {
    for (let jdx = 0; jdx < hasToolkit.length; jdx++) {
        toolkits[jdx].classList.remove("tooltip_active");
    }
}