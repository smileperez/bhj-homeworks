// узнаем реальную высоту видимой части браузера
const viewportHeight = window.innerHeight;
// находим необходим элемент div
const div = document.querySelector('.reveal');

// задаем функцию проверки - попал ли элемент div в область видимости
let isInViewport = function(element) {
    let elementTop = element.getBoundingClientRect().top;
    // console.log(elementTop);
    let elementBottom = element.getBoundingClientRect().bottom;
    // console.log(elementBottom);

    if ((elementTop < viewportHeight) && (elementBottom > 0)) {
        // console.log(true);
        return true;
    } else {
        // console.log(false);
        return false;
    }
};

// задаем функцию проверки видимости элемента при скроллинге страницы
window.onscroll = function() {
    if (isInViewport(div) === true) {
        div.classList.toggle('reveal_active');
    } else {
        div.classList.toggle('reveal_active');
    }
}

