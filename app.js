const dayImg = './images/day.jpg';
const eveningImg = './images/evening.jpg';

const cityInput = document.getElementById('city-input');
let city = 'seoul'; 

function fetchData() {  
    fetch(`/.netlify/functions/fetchWeatherData?city=${city}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const code = data.current?.condition.code;

    const time = new Date(data.location?.localtime);
    const location = data.location?.name;
    const temp = data.current?.temp_c;
    const condition = data.current?.condition.text;
    const humidity = data.current?.humidity;
    const wind = data.current?.wind_kph;
    
    handleDataDisplay(location, temp, condition, humidity, wind);
    handleWeatherIcon(code);

    handleBackgroundImg(time); 
  });

}

function handleBackgroundImg(time) {
    let isDay;
    if (time.getHours() >= 6 && time.getHours() <= 17 ) {
        isDay = true;
    } else {
        isDay = false;
    }

    document.querySelectorAll('.bg-img').forEach(img => {
        isDay ? img.src = dayImg : img.src = eveningImg 
    })
}

fetchData();

function handleDataDisplay(location, temp, condition, humidity, wind) {
    document.getElementById('city').textContent = location;
    document.getElementById('temp').textContent = temp + ' °C';
    document.getElementById('condition').textContent = condition;
    document.getElementById('humidity').textContent = humidity + '%';
    document.getElementById('wind').textContent = wind + ' km/h';
}


cityInput.addEventListener('input', () => {
    city = cityInput.value;
    fetchData();
})


function handleWeatherIcon(code) {
    let iconSrc;

       if (code === 1000) {
        iconSrc = './images/sunny.svg';
    } else if (code === 1237 || code === 1261) {
        iconSrc = './images/hail.svg';
    } else if (code === 1276 || code === 1282) {
        iconSrc = './images/thunderstorm.svg';
    } else if (code === 1003 || code === 1006 || code === 1009) {
        iconSrc = './images/cloudy.svg';
    } else if (code === 1147 || code === 1030 || code === 1135) {
        iconSrc = './images/fog.svg';
    } else if (code === 1087 || code === 1273 || code === 1279) {
        iconSrc = './images/storm.svg';
    } else if (code === 1171 || 
            code === 1186 ||
            code === 1189 ||
            code === 1192 ||
            code === 1195 ||
            code === 1202 ||
            code === 1243 ||
            code === 1246) {
                iconSrc = './images/heavy-rain.svg';
        } else if (code === 1198 ||
            code === 1240 ||
            code === 1168 ||
            code === 1063 ||
            code === 1072 ||
            code === 1180 ||
            code === 1150 ||
            code === 1183 ||
            code === 1153
        ) {
            iconSrc = './images/light-rain.svg';
        } else if (code === 1255 ||
            code === 1258 ||
            code === 1225 ||
            code === 1219 ||
            code === 1222 ||
            code === 1213 ||
            code === 1216 ||
            code === 1114 ||
            code === 1066 
        ) {
            iconSrc= './images/snowy.svg';
        } else if (code === 1207 ||
            code === 1069 ||
            code === 1204 ||
            code === 1249 ||
            code === 1252 ||
            code === 1117
        ) {
            iconSrc = './images/blizzard.svg';
        }

        document.getElementById('weather-icon').src = iconSrc;
}