// Getting ElementById from HTML file 
const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const tittleEl = document.getElementById("tittle");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

// making a functon that fecth the api and display the result which is aysnc and await func
async function fetchAPI(word) {
  // to avoid the error we used try and catch method 
  try {
    // making elements block and none before performing the task 
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    // Changing the innertext 
    infoTextEl.innerText = `Searching the meaning of '${word}'`;
    // api url 
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    // fetchng the url and changing into the json Object
    const result = await fetch(url).then((response) => response.json());
    
    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
    // putting the result that came from the server/api in the html file using innerText 
    tittleEl.innerText = result[0].word;
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
    // to catch the error 
  } catch (error) {
        console.log(error);
  }
}
// event listener to get the input form the input section and sending it to the function
inputEl.addEventListener("keyup", (event) => {
  if (event.target.value && event.key === "Enter") {
    fetchAPI(event.target.value);
  }
});
