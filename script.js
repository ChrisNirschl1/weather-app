
//Variables
var myKey = "5c43e61a59f648a92cbf617b1d1d0a6a";
var userSearch = document.querySelector("userSearch");
var searchBtn = document.querySelector("#searchBtn");

var currentTempr = document.querySelector("#temp");
var currentWindy = document.querySelector("#wind");
var currentHumid = document.querySelector("#humidity");
var curentUvv = document.querySelector("#currentUv");

//Called by search button, gets value from searchbar
function searchButton() {
    event.preventDefault();
    var newSearch = document.querySelector(".userSearch").value;
    console.log(newSearch);
    localStorage.setItem(newSearch, newSearch);
    if (newSearch){
        getWeather(newSearch);
    }



}


//Calls the weather API and puts the elemnts on screen

var getWeather = function(city) {
    event.preventDefault();
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

var currentWind = data.wind["speed"];
var windSet = document.createElement("p");
windSet.innerHTML = currentWind + " miles per hour"
currentWindy.append(windSet);

var currentHum = data.main["humidity"];
var humSet = document.createElement("p");
humSet.innerHTML = currentHum
currentHumid.append(humSet);
//Couldn't get data to append on existing elemnts, so created a new <P> to put the data in, then appened that new elemnt onto the existing 
})
}
//Listens for click on search button
searchBtn.addEventListener("click", searchButton);