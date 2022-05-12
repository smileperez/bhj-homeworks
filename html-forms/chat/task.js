const chatWidjet = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const container = document.querySelector('.chat-widget__messages-container');
let inaction;

// Запишем возможные грубые ответы бота
let botResponse = [
    'Добрый день и досвидания!',
    'Вы что-то написали?',
    'Все операторы заняты',
    'Больше не пишите нам',
    'Тро-ло-ло',
    'Отстаньте!',
]

// Запишем возможные грубые вопросы бота
let botQuestion = [
    'Мы просто так вас ждем?!',
    'Вы что-то будете писать?',
    'Долго вас ждать???',
    'Если не напишите в течение 30 сек, мы вас пошлем',
    'Уснули чтоли?'
]

// Вспомогательная функция рандомайзер сообщений
function randomMessage(messages) {
    return Math.floor(Math.random() * messages.length);
}

// Открытие окна чата при событии клика на красный баннер
chatWidjet.addEventListener('click', () => {
    chatWidjet.classList.add('chat-widget_active');


    // Запускаем интервал времени на отслеживание бездействия 30 секунд.
    // Если бездействуем - выдаем рандомный вопрос.
    inaction = setInterval(() => {
   
        messages.innerHTML += `
        <div class="message">
        <div class="message__time">${setCurrentTime()}</div>
        <div class="message__text">
        ${botQuestion[randomMessage(botQuestion)]}
        </div>
        </div>
        `;
    
    }, 30000);

});

// Функция закрытия окна чата при потере фокуса
chatInput.addEventListener('blur', () => {
    chatWidjet.classList.remove('chat-widget_active');
});


// Вспомогательная функция вычисления и форматирования текущего времени
function setCurrentTime() {

    // Получаем текущее время каждый раз при вызове функции
    let currentTime = new Date();
    
    // добавляем 0 для корректного отображения формата времени
    if (currentTime.getHours() < 10) {
        return '0' + currentTime.getHours() + ':' + currentTime.getMinutes();
    }

    return currentTime.getHours() + ':' + currentTime.getMinutes();

}

// Вспомогательная функция проверки текста на пустоту и пробелы
function checkSpace(text) {

    // Отсекаем всевозможные пробелы
    text.value = text.value.trim();

    // Проверяем на пустоту. Если пусто, то true
    if (text.value == '') {
        return true;
    } 
    
    // Если не пусто, то false
    return false;
};


// Подписываемся на события по отправке сообщения через клавишу ENTER
chatInput.addEventListener('keydown', e => {
    
    // Првоеряем какая кнопка нажата, если ENTER (13), то отправляем сообщении
    if (e.keyCode === 13) {

        // Так как мы нажали ENTER, значит мы не бездействуем, очищаем интервал.
        clearInterval(inaction);
        console.log('Время бездействия очищено');

        // Проверяем на пустое сообщение, если false - то отрпавляем
        if (checkSpace(chatInput) == false) {
            
            // Отправка сообщения пользователя
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${setCurrentTime()}</div>
            <div class="message__text">
            ${chatInput.value}
            </div>
            </div>
            `;

            // Очистка инпута после отправки сообщения
            chatInput.value = '';

            // Прокрутка скролла вниз после сообщения пользака
            container.scrollTop = container.scrollHeight;

            // Реакция бота на сообщение пользователя спустя секунду
            setTimeout(() => { 
                
                messages.innerHTML += `
                <div class="message">
                <div class="message__time">${setCurrentTime()}</div>
                <div class="message__text">
                ${botResponse[randomMessage(botResponse)]}
                </div>
                </div>
                `;

                // Прокрутка скролла вниз после ответа бота
                container.scrollTop = container.scrollHeight;
            
            }, 1000);

        } else {
        console.error(`Вы отправляете пустое сообщение`);
        }
    }
});