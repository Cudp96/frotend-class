const apiKey = "7e99a892936dc4e932bfb7b38497a371";
// API-key 

// Getting inputs and element through HTML
const weatherDataEl = document.getElementById("weather-data");

const cityWeatherEl = document.getElementById("city");

const formEl = document.querySelector("form");

// Added EventListener to get input from input field and setting an function to fetch the weather data.
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityWeatherEl.value;
  getWeatherData(cityValue);
});

// aysnc and await function created to fetch weatherData from apikey and website
async function getWeatherData(cityValue) {
    // try and catch implemented to throw an custom Errors
  try {
    // fetching data 
    const response = await fetch(
      `https:api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
    //   To know weather data is fetching or not from api server
      if (!response.ok){
        throw new Error("Network error")
          }
        //   transfering the data that comes form api to json format
          const data = await response.json()
         
        //   giving the custom value to the const that comes from  api
          const temperature = Math.round(data.main.temp);
          const description = data.weather[0].description;
          const icon = data.weather[0].icon;
        //   making an details array for the details id and classes
          const details =[
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity} %`,
            `Wind Speed: ${data.wind.speed} m/s`
            ]
            // putting the value in the HTML using querySelector
            weatherDataEl.querySelector(".icon").innerHTML =`<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">` ;
            
            weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C` ;
            
            weatherDataEl.querySelector(".description").textContent = `${description}` ;
            // used map to show details individually in the details section 
            weatherDataEl.querySelector(".details").innerHTML = details.map((detail)=>
                `<div> ${detail} </div> `).join('');
    // To catch error and handling it by showing custom error messages instead        
} catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML =`` ;
            
    weatherDataEl.querySelector(".temperature").textContent = `` ;
    
    weatherDataEl.querySelector(".description").textContent = `Invalid City Name` ;

    weatherDataEl.querySelector(".details").innerHTML = '';
  }
}
