


const newNameEl = document.getElementById('newName');
const newUserNameEl = document.getElementById('newUserName');
const userEmailEl = document.getElementById('userEmail');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirmPassword');

const signBtnEl = document.getElementById('signBtn');

signBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    const  selectedGenderEl = document.querySelector( 'input[name="gender"]:checked'); 
    const newName = newNameEl.value;    
    const newUserName = newUserNameEl.value;
    const userEmail = userEmailEl.value;
    const password = passwordEl.value;
    const confirmPassword = confirmPasswordEl.value;
    const selectedGender =  selectedGenderEl.value;
    const credentials = {
        name: newName,
        username: newUserName,
        email: userEmail,
        password: password,
        confirmPassword: confirmPassword,
        gender: selectedGender
    }
    console.log(credentials);
    localStorage.setItem('credentials', JSON.stringify(credentials));
})