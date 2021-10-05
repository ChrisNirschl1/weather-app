

var myKey = "5c43e61a59f648a92cbf617b1d1d0a6a";
var userSearch = document.querySelector("userSearch");
var searchBtn = document.querySelector("#searchBtn");

var currentTempr = document.querySelector("#temp");
var currentWindy = document.querySelector("#wind");
var currentHumid = document.querySelector("#humidity");
var curentUvv = document.querySelector("#currentUv");

function searchButton() {
    var newSearch = document.querySelector(".userSearch").value;
    console.log(newSearch);
    localStorage.setItem(newSearch, newSearch);
    if (newSearch){
        getWeather(newSearch);
    }



}



// getWeather();  


var getWeather = function(city) {
var apiUrl = ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + myKey);
console.log(apiUrl);

fetch(apiUrl)
.then(function(response){
console.log(response)
return response.json();
})
.then(function(data){
console.log(data.main["temp"]);
var currentTemp = data.main["temp"];
var tempSet = document.createElement("p");
tempSet.innerHTML = currentTemp + " fahrenheit"
currentTempr.append(tempSet);

var currentWind = data.wind.speed;



})



}

searchBtn.addEventListener("click", searchButton);