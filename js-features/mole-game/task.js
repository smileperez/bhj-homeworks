// ЗАДАЧА 3

// Создаем вспомогательную функцию поиска дырок
function getHole(idx) {
    return document.getElementById(`hole${idx}`);
}

// Задаем циклом подписки сразу на все дырки
for (let idx = 1; idx < 10; idx++) {

    // Подписываемся на события по клику
    getHole(idx).onclick = function() {

        // Если имеем нужны ID, засчитываем убийство, если нет, засчитываем промах.
        if (getHole(idx).className.includes( 'hole_has-mole' )) {
            kills.innerText++;
        } else {
            misses.innerText++;
        }
    }
}
