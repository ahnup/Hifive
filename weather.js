const weather = document.querySelector(".weather");
var Icon = document.querySelector(".Icon");

const API_KEY = "e331664ad4a820a338e5d46feb7a39de";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function(response) { // then -> wait fetch
            return response.json()
        })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            const icon = json.weather[0].icon;
            weather.innerText = `${temperature}도 \n@ ${place}`;
            Icon.innerHTML =`<img src="http://openweathermap.org/img/w/${icon}.png" width="100" height="100">`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) { 
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // key: value -> same -> latitude
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError() {
    console.log(`can't access geo location`)
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords); //JSON.parse (string -> object)
        //console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init() {
    loadCoords();
}

init();