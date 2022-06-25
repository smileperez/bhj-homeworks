let xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        
        let poll = xhr.response.data;
        let answers = poll.answers;
        // console.log(answers);
        // console.log(xhr.response.id);

        // Записываем текст вопроса
        pollTitle.innerText = poll.title;

        // Перебираем ответы и записываем их
        Object.keys(answers).forEach(key => {
            let pollAnswerButton = document.createElement('button');
            pollAnswerButton.className = 'poll__answer';
            pollAnswerButton.innerText = ' ' + answers[key] + ' ';
            pollAnswers.insertAdjacentElement('beforeend', pollAnswerButton);
        })

        // Найдем все созданные баттоны для дальнейшего их отслеживания
        const allButtons = document.querySelectorAll('.poll__answer');
        console.log(allButtons);

        Object.keys(allButtons).forEach(key => {
            allButtons[key].onclick = function() {
                alert('Спасибо, ваш голос засчитан!');

                // Повышенная сложность
                let pollId = xhr.response.id;
                let answerId = key;
                // console.log(`vote=${pollId}&answer=${answerId}`)

                let xhrstat = new XMLHttpRequest();
                xhrstat.responseType = 'json';
                xhrstat.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                xhrstat.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrstat.send( 'vote=' + pollId + '&answer=' + answerId );


                xhrstat.addEventListener('readystatechange', () => {
                    if (xhrstat.readyState === xhr.DONE) {
                        console.log(xhrstat.response.stat);
                        const stats = xhrstat.response.stat;

                        // Убираем все баттоны
                        Object.keys(allButtons).forEach(key => {
                            allButtons[key].remove();
                        })

                        // Считаем все голоса
                        let allVotes = 0;

                        Object.keys(stats).forEach(key => {
                            allVotes = allVotes + stats[key].votes;
                        })

                        // Добавляем статистику
                        Object.keys(stats).forEach(key => {
                            let stat = document.createElement('div');
                            let nameVotes = document.createElement('span');
                            nameVotes.innerText = stats[key].answer + ': ';
                            let votes = document.createElement('span');
                            votes.innerText = (stats[key].votes / allVotes * 100).toFixed(2) + ' %';
                            
                            // Собираем div из span;ов
                            stat.insertAdjacentElement('beforeend', nameVotes);
                            stat.insertAdjacentElement('beforeend', votes);

                            // Делаем проценты жирными (после привзяки votes к родителю)
                            votes.outerHTML = '<b>' + votes.innerText + '</b>';

                            // Добавляем статистику по ответу [key] на страницу
                            pollAnswers.insertAdjacentElement('beforeend', stat);

                        })


                    }
                })
            }
        })
    }
})

