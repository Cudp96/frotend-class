const userNameEl = document.getElementById('userName');
const userPasswordEl = document.getElementById('userPassword');

const btnEl = document.getElementById('btn');

btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    const userName = userNameEl.value;
    const userPassword = userPasswordEl.value;
    const credentials = {
        username: userName,
        password: userPassword
    }
    console.log(credentials);
})