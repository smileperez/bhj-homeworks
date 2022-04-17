// получаем коллецию элементов для ротации
const rotationSpans = document.querySelectorAll('.rotator span');

// создаем отдельную функцию для поиска активного элемента
function searchActive(rotColl) {
    for (i = 0; i < rotColl.length; i++) {
        // если нашли активный элемент, то отдаем индекс активного элемента
        if (rotColl[i].classList.contains('rotator__case_active') === true) {
            return i;
        }
    }
}

// создаем отдельную функцию для ротации
function rotator(rotColl) {
   
    // ищем активный элемент из коллекции
    let active = searchActive(rotColl);

    // убираем старый активный элемент
    rotColl[active].classList.toggle('rotator__case_active');
    // увеличиваем счетчик для того, чтобы выбрать следующий элемент коллекции
    active++;

    // проверка на максимальное количество элементов и сброс
    if (active === rotColl.length) {
        active = 0;
    }

    // включаем новый активный элемент
    rotColl[active].classList.toggle('rotator__case_active');

}


// запускаем протацию каждую секунду
setInterval(rotator, 1000, rotationSpans);

