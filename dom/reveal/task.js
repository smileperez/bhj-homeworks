// узнаем реальную высоту видимой части браузера
const viewportHeight = window.innerHeight;
// находим необходим элемент div
const divs = document.querySelectorAll('.reveal');

// задаем функцию проверки - попал ли элемент div в область видимости
let isInViewport = function(element) {
    let elementTop = element.getBoundingClientRect().top;
    // console.log(elementTop);
    let elementBottom = element.getBoundingClientRect().bottom;
    // console.log(elementBottom);

    if ((elementTop < viewportHeight) && (elementBottom > 0)) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
};

// задаем скрытия или открытия всех элементов
function toggleElement(collection) {

    for (i = 0; i < collection.length; i++) {
        if (isInViewport(collection[i]) === true) {
            collection[i].classList.toggle('reveal_active');
            // console.log(`Появился ${i+1}`)
        } else {
            collection[i].classList.toggle('reveal_active');
            // console.log(`Скрылся ${i+1}`)
        }
    }
}

// вешаем функцию скрытия/открытия на событие скролла
window.onscroll = function() {
    toggleElement(divs);
}

    


