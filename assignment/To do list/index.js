// Getting the element form html
const btnEl =document.getElementById('btn');
const inputBoxEl = document.getElementById('inputBox');
const listContainerEl = document.getElementById('list-container');

// Calling eventlistener function
btnEl.addEventListener('click',(e)=>{
    e.preventDefault();
    // if input is null or empty it will alert to write something
    if (inputBoxEl.value === ''){
        alert('Please Write Something')
    }
    else{
        // creating a new element 'li' with javascript and appending the value that user has given
        let li = document.createElement('li');
        li.innerHTML = inputBoxEl.value;
        listContainerEl.appendChild(li);
         
        // create a new element "span" with javascript and appending cross sign 
        let span = document.createElement('span');
        // \u00d7 is for cross sign
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
// At first putting the input null
    inputBoxEl.value = '';
    // caling out the saveData function
    saveData();
});

// input event listener to toggle the checked and unchecked state and remove after pressing the cross sign button
listContainerEl.addEventListener('click', (e) => {
    // target li with tagName and toggling the checked and unchecked state
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        // calling the saveData function to update in localStorage
        saveData();
    }
    // target span with tagName removing the task after pressing the cross sign button
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
         // calling the saveData function to update in localStorage
        saveData();
    }
}, false);

// saving the data in localStorage
const saveData = () => {
    localStorage.setItem('data', listContainerEl.innerHTML);
}
// showing the data form localStorage
const showData = () => {
    listContainerEl.innerHTML = localStorage.getItem('data');
};
// calling the showData function to show the data in the list container
showData();