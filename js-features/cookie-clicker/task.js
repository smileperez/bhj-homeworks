// ЗАДАЧА 1
// Находим элемент <img> для того что подписаться на клики
const game = document.getElementById("cookie");

// Задачем начальное время для выяснения скорости кликов
let lastClick = new Date();

game.onclick = function() {
    // Задаем таймер для выяснения скорости новых кликов относительно старого (начального) клика lastClick
    let timer = new Date();
    timer = timer.getTime();
    console.log(timer - lastClick);

    // Увеличиваем значение счётчика при каждом клике на печеньку
    // Находим требуемый <span>
    const counter = document.getElementById("clicker__counter");
    // Увеличиваем счетчик кликов
    counter.innerText++;

    // Чередуем уменьшение и увеличение печеньки при каждом клике
    // Фиксируем реальные величины
    const realWidth = game.width;
    const realHeight = game.height;
    // Задаем таймаут, чтобы через 50 мс вернуть размеры картинки в изначальное положение
    let timeout = setTimeout(() => {
                game.width = realWidth;
                game.height = realHeight;
            },
        50);
    // Немедленно увеличиваем размеры картинки
    game.width *= 1.2;
    game.height *= 1.2;

    // Добавляем скорость кликов
    // Находим новый <span>
    const speed = document.getElementById("clicker__speed");
    // Считаем произвоидительность
    let perfomance =  1 / (timer - lastClick) * 1000;
    // Записываем в <span> значение производительности
    speed.innerText = Number(perfomance.toFixed(2));
    // Задаем время последнего клика
    lastClick = timer;
}