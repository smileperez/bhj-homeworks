class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {

    // РАБОТА С ТАЙМЕРАМИ:
    // Создаем переменную, хранящую текущее время.
    let timer;
    // Создаем переменную, хранящую текущий идентификатор таймер, по умолчанию = пусто.
    let timerId = null;

    // Создаем вспомогательную функцию для запуска таймера в нужной части нашего кода
    let startTimer = () => {
      // Обязательная проверка на существование запущенного таймера
      if (timerId) {
        console.error('Таймер уже существует!')
        return;
      }
      // document.querySelector(".status__time").innerHTML = timer;
      // Задаем таймер на уменьшение каждую секунду
      timerId = setInterval(() => {  
        // Если таймер подходит к концу - конец всей игры и все ресетим в ноль, останавилваем таймер, онуляем число успехов
        if (timer < 2) {
          this.reset();
          stopTimer();
          timer = 0;
          success = 0;
          // Обновляем время на front-end на 0, так как игра завершилась по таймауту.
          document.querySelector(".status__time").innerHTML = 0;
          console.log(`Осталось времени ${timer} секунд`);
          console.log(`Попробуй еще!`);
        } else {
          timer--;
          // Обновляем время на front-end на 0 в соответствии с вычисленным таймером.
          document.querySelector(".status__time").innerHTML = timer;
          console.log(`Осталось времени ${timer} секунд`);
        }
      }, 
      1000);
    };

    // Создаем вспомогательную функцию для остановки таймера в нужной части нашего кода
    let stopTimer = () => {
      // Обязательная проверка на существование запущенного таймера
      if (timerId) {
        // Прекращаем работу таймера
        clearInterval(timerId);
        timer = 0;
        // Присваиваем переменной timerId значение null
        timerId = null;
      }
    }


    // РАБОТА ОСНОВНЫМ КОДОМ:
    
    // Переменные:
    // Задаем переменную храняющую посленюю нажатую клавишу.
    let pressedSymbol;
    // Задаем переменную храняющую количество текущих успешных нажатий.
    let success = 0;
    // Задаем переменную храняющую количество ТРЕБУЕМЫХ успешных нажатий.
    let requiredSuccess;
    
    // Для удобства.
    console.log(`Текущий требуемый символ "${this.currentSymbol.innerHTML}"`);

    // Запускаем обработчик событий клавиатуры
    document.addEventListener("keydown", 
    (event) => {
      
      // Записываем последнюю нажатую клавишу
      pressedSymbol = event.key.toLowerCase();
      console.log(`Нажали "${pressedSymbol}"`);

      // Проверка на нажатую клавишу. Если клавиша совпадает с требуемым символом - то увеличиваем количество успешных нажатий success.
      // Если не правильно нажали, то ставим success в 0, завершаем все возможные таймеры если они есть и ставим поражение игроку.
      if (this.currentSymbol.innerHTML.toLowerCase() === pressedSymbol) {

        // Так как успешное нажатие - повысили число успешных нажатий.
        success++;

        // Если число успешных нажатий = 1, то запускаем таймер
        if (success === 1) {
          // Записываем время таймера по числу символов слова.
          timer = this.wordElement.querySelectorAll(".symbol").length;
          // Записываем число требуемых успехов по числу символов слова.
          requiredSuccess = this.wordElement.querySelectorAll(".symbol").length;
          // Обновляем время на front-end в соответствии с вычислернным временем.
          document.querySelector(".status__time").innerHTML = timer;
          // Запускаем таймер.
          startTimer();
          // Засчитываем победу.
          this.success();
          console.log(`Количество правильных символов: ${success}!`);
          console.log(`---------`);
          console.log(`Следующий требуемый символ "${this.currentSymbol.innerHTML}"`);
        // Если число успешных нажатий = числу символов, то мы выиграли, очищаем таймер.
        } else if (success === requiredSuccess) {
          console.log(`Количество правильных символов: ${success}!`);
          // Обнуляем число успехов.
          success = 0;
          // Останавливаем таймеры.
          stopTimer();
          // Засчитываем победу.
          this.success();
          console.log(`Вы выиграли!`);
          // В конце победы, когда слово обновилось, обновляем таймер на фронт-енде, чтобы игроку было комфортно смотреть на следующее время.
          document.querySelector(".status__time").innerHTML = this.wordElement.querySelectorAll(".symbol").length;
        // В остальных случаях НЕ запускаем таймер, а просто выполняем программу игры.
        } else {
          // Просто засчитываем победу.
          this.success();
          console.log(`Количество правильных символов: ${success}!`);
          console.log(`---------`);
          console.log(`Следующий требуемый символ "${this.currentSymbol.innerHTML}"`);
        }
      
      // Если нажали неправильно - останавливаем таймер и число успехов ставим на 0.
      } else {
        // Обнуляем число успехов.
        success = 0;
        // Останавливаем таймеры.
        stopTimer();
        // Засчитываем поражение.
        this.fail();
        console.log("Неправильно");
      }
    });

  }


  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

