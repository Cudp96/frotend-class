const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const tittleEl = document.getElementById("tittle");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";

    infoTextEl.innerText = `Searching the meaning of '${word}'`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((response) => response.json());
    
    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";

    tittleEl.innerText = result[0].word;
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
    
  } catch (error) {
        console.log(error);
  }
}

inputEl.addEventListener("keyup", (event) => {
  if (event.target.value && event.key === "Enter") {
    fetchAPI(event.target.value);
  }
});
