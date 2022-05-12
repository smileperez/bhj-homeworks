const interestsCheckbox = document.querySelectorAll('li.interest > ul.interests');
console.log(interestsCheckbox);

const parent = interestsCheckbox[0].closest('.interests');
console.log(parent);

for (i = 0; i < interestsCheckbox.length; i++) {

    interestsCheckbox[i].closest('li.interest').addEventListener('click', () => {
    
        // console.log(`Клик на ${this}`)
        // let parent = interest[i].closest('interests_main');
        // console.log(parent);
    
        // if (parent.className == "interests_main") {
        //     console.log('Это главная тычка!')
        // } else {
        //     console.log('Это не главная тычка')
        // }
    
    });

}
