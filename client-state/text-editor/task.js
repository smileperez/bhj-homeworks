const textArea = document.getElementById('editor');
const storedText = localStorage.getItem('text');
const button = document.getElementById('clearButton');

button.addEventListener('click', (e) => {
    if (storedText) {
        localStorage.removeItem('text');
        console.log('localStorage очищен!')
    }
    textArea.value = '';
    console.log('textArea очищен!')
});

if (storedText) {
    console.log('После перезагрузки страницы данные были восстанволены из localStorage');
    textArea.value = storedText;

    textArea.addEventListener('input', (e) => {
        console.log('Продолжаем изменять дынные');
        localStorage.setItem('text', textArea.value);
    });
} else {
    textArea.addEventListener('input', (e) => {
        console.log('Записали новые данные в localStorage!');
        localStorage.setItem('text', textArea.value);
    });
}

