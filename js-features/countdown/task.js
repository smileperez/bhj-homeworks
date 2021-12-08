// ЗАДАЧА 1

// Ищем нужный элемент по id "timer"
const timer = document.getElementById("timer");

// Задаем переменную времени, взял ее из innerText
let time = timer.innerText;

console.log(`Полученное из документа время в текстовом формате: ${time}`);
// Разделяем строку на часы, минуты и секунды
let timeArr = time.split(":");

// Проверка входных данных на корректность
if (Number(timeArr[2]) > 59) {
    console.error(`Введены некорректные секунды`);
    }
if (Number(timeArr[1]) > 59) {
    console.error(`Введены некорректные минуты`);
    }


// Считаем общее кол-во секунд таймера
let generalSeconds = Number(timeArr[2]) + timeArr[1] * 60 + timeArr[0] * 3600;
console.log(`Всего осталось секунд до выигрыша: ${generalSeconds}`);

// Вычисляем оставшиеся часы, минуты и секунды
let currentHours = Number((generalSeconds / 3600).toFixed());
let currentMinuts = Number((generalSeconds / 60 - currentHours * 60).toFixed());
let currentSeconds = Number((generalSeconds - currentHours * 3600 - currentMinuts * 60).toFixed());

// Задаем интервел на каждую секунду
let timeout = setInterval(() => {
    if (generalSeconds > 0) {
        generalSeconds--;
        console.log(`Всего осталось ${generalSeconds} секунд`);

        // Создаем проверку на шестидесятисекундное отображение секунд в таймере
        if (currentSeconds > 0) {
            currentSeconds--;
        } else if (currentSeconds === 0) {
            currentSeconds = 59;
            currentMinuts--;
        }

        // Создаем проверку на шестидесятиминутное отображение минут и часов в таймере
        if (currentMinuts === 0 && currentHours === 0) {
            currentMinuts = 0;
            currentHours = 0;
        } else if (currentMinuts === 0) {
            currentMinuts = 59;
            currentHours--;
        }

        // Выводим информация по таймеру в правильном формате
        timer.innerText = pad(currentHours) + ":" + pad(currentMinuts) + ":" + pad(currentSeconds);

    } else {
        alert("Вы победили в конкурсе!");
    }
},
1000);

// Функция преобразования отображения в двухзначный вид при x < 10
function pad(x) {
    return x < 10 ? '0' + x : x;
}