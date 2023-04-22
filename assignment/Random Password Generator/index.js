const btnEl = document.getElementById('btn');
const passwordEl = document.getElementById('password');

const length = 10;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const specailSymbol = '!@#$%^&*()*+-/';

const allChars = upperCase + lowerCase + number + specailSymbol;

const createPassword = ()=>{
    let password = '';
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += specailSymbol[Math.floor(Math.random()*specailSymbol.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random()*allChars.length)];
    };
    passwordEl.value = password;
}

const copyPassword = ()=>{
    passwordEl.select();
    document.execCommand('copy');
}

btnEl.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('clicked');
    createPassword(password);
});