
const apiKey="89601677cc7388ec49662fe55434580b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?appid=";

const searchSpace = document.querySelector(".search input")
const searchButton = document.querySelector(".search i")
const weatherIcon = document.querySelector(".weather-icon")

async function confirmWeather(city){

    if (!city) {
        console.log("Please enter a valid city name.");
        return;
      }

    const response = await fetch(apiUrl + apiKey +  "&q=" + city);
    if(response.status==404){
        document.querySelector(".errorMessage").style.display = "block"
    }
    var allData = await response.json();

    console.log(allData)

    document.querySelector(".city").innerHTML = allData.name;
    document.querySelector(".temp").innerHTML = convertKelvinToCelsius(allData.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = allData.main.humidity + "%";
    document.querySelector(".wind").innerHTML = allData.wind.speed + "km/h";

    if(allData.weather[0].main== "Clouds"){
weatherIcon.src= "images/cloud.png"
    }
    else if(allData.weather[0].main =="Rain"){
        weatherIcon.src= "images/rainy.png"
    }
    else if(allData.weather[0].main == "Clear"){
        weatherIcon.src= "images/clearclouds.png"

    }
    else if(allData.weather[0].main == "Drizzle"){
        weatherIcon.src= "images/rain2.png"
    }
    else if(allData.weather[0].main == "Mist"){
        weatherIcon.src= "images/mist.png"
    }

    document.querySelector(".weather").style.display="block";


}

function convertKelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

searchButton.addEventListener("click", ()=>{
    confirmWeather(searchSpace.value);
});

