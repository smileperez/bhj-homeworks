const form = document.getElementById('form');
const input = document.getElementById('file');
const progress = document.getElementById('progress');

// Отслеживание состояние изменение input
input.addEventListener('change', () => {
    let file = input.files[0];
    // console.log(`В input добавлен файл ${file.name}`);

    // Отслеживание состаяния отправки формы
    form.addEventListener('submit', (e) => {
    
        let request = new XMLHttpRequest();
        
        // отслеживание отправки на сервер
        request.upload.onprogress = function(event) {
            let percentage = (event.loaded / event.total).toFixed(1);
            console.log(`Загружено ${percentage} %`);
            progress.value = percentage;
        }
        
        // Отслеживание состояние выполнения запроса
        request.onload = request.onerror = function() {
            if (this.status == 200) {
              log("success");
            } else {
              log("error " + this.status);
            }
        };

        request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
        request.send(file);

        e.preventDefault();
    })
})

    
    


