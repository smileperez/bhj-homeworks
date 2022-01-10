// Получаем элемент управления "Влево"
const buttonLeft = document.querySelector(".slider__arrow_prev");

// Получаем элемент управления "Вправо"
const buttonRight = document.querySelector(".slider__arrow_next");

// Получаем коллекцию элементов с классом slider__item
const sliders = document.getElementsByClassName("slider__item");
console.log(`Общее количество слайдов: ${sliders.length}`);
console.log(`Текущий слайд: №${getActiveSlide() + 1}`);


// Вспомогательная функция поиска текущего активного слайда
function getActiveSlide() {
    let activeSlideNumber;
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].className.includes("slider__item_active") === true) {
            activeSlideNumber = i;
        };
    }
    // Выдаем номер текущего активного слайда
    return activeSlideNumber;
}

// Задаем номер следующего требуемого слайда относительно текущего активного слайда $activeSlideNumber
let nextSlide;

// Устанавливаем обрабочик собыйтий на элемент управления "Влево"
buttonLeft.onclick = function() {
    // Обозначем следующий требуемый слайд влево
    nextSlide = getActiveSlide() - 1;
    // Если следующий слайд -1, то переходим к самому последнему слайду в коллекции
    if (nextSlide < 0) {
        nextSlide = sliders.length - 1;
    }
    console.log(`Текущий слайд: №${nextSlide + 1}`);

    // Убираем текущий активный слайд
    sliders[getActiveSlide()].className = "slider__item";
    // Выставляем следующий требуемый слайд
    sliders[nextSlide].className = "slider__item slider__item_active";
}


// Устанавливаем обрабочик собыйтий на элемент управления "Вправо"
buttonRight.onclick = function() {
    // Обозначем следующий требуемый слайд вправо
    nextSlide = getActiveSlide() + 1;
    // Если следующий слайд больше количества слайдов, то возрващаемся к первому слайду в коллекции
    if (nextSlide > sliders.length - 1) {
        nextSlide = 0;
    }
    console.log(`Текущий слайд: №${nextSlide + 1}`);

    // Убираем текущий активный слайд
    sliders[getActiveSlide()].className = "slider__item";
    // Выставляем следующий требуемый слайд
    sliders[nextSlide].className = "slider__item slider__item_active";
}

// ПОВЫШЕННАЯ СЛОЖНОСТЬ
// Получаем коллецию элементов управления - точек
const dots = document.getElementsByClassName("slider__dot");

// Циклом устанавливаем орабочик событий по клику на каждкую точку управления
for (let idx = 0; idx < dots.length; idx++) {
   
    dots[idx].onclick = function() {
        // Перед работой основного кода, очищаем белую заливку у каждой точки управления, елси она была ранее задана.
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].className === "slider__dot slider__dot_active") {
                dots[i].className  = "slider__dot";
            }
        }
        
        // Обозначаем следующий слайд - номер точки по которой кликнули
        nextSlide = idx;
        // Убираем текущий активный слайд
        sliders[getActiveSlide()].className = "slider__item";
        // Выставляем следующий требуемый слайд
        sliders[nextSlide].className = "slider__item slider__item_active";
        console.log(`Текущий слайд: №${nextSlide + 1}`);
        
        // Красим в белый цвет активную точку управления
        dots[idx].className = "slider__dot slider__dot_active";
    }
}
