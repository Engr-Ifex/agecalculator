let birthDate = document.querySelector('#birthdate');
let result = document.querySelector('#result');
let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    let todayDate = new Date();
    let myDate = new Date(birthdate.value);
    let todayYear = todayDate.getFullYear();
    let myDateYear = myDate.getFullYear();
    let todayMonth = todayDate.getMonth();
    let myDateMonth = myDate.getMonth();

    let age = todayYear - myDateYear

    result.innerHTML = 'You are' + ' ' + age + ' ' +  'years old' 

    // for if your birthday has not been done yet
    if (todayMonth < myDateMonth) {
        result.innerHTML = 'You are' + ' ' + (age - 1) +' '+ 'years old';
    }
})
  