// ЗАДАЧА 3

// Создаем переменные убийств и промахов
let kill = document.getElementById("dead");
let miss = document.getElementById("lost");

// Счетчики убийств и промахов
let kills = 0;
let losses = 0;

// Создаем вспомогательную функцию поиска дырок
function getHole(idx) {
    return document.getElementById(`hole${idx}`);
}

// Задаем циклом подписки сразу на все
for (let idx = 1; idx < 10; idx++) {

    // Подписываемся на события по клику
    getHole(idx).onclick = function() {

        // Если имеем нужны ID, засчитываем убийство, если нет, засчитываем промах.
        if (getHole(idx).className.includes( 'hole_has-mole' )) {
            kills++;
            kill.innerText = kills;
            if (kills === 10) {
                alert("Вы выиграли!")
                kills = 0;
                losses = 0;
            }
        } else {
            losses++;
            miss.innerText = losses;
            if (losses === 5) {
                alert("Вы проиграли!")
                kills = 0;
                losses = 0;
            }
        }
    }
}
