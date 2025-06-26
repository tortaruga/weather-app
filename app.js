let city = 'Rome';
fetch(`/netlify/functions/fetchWeatherData?city=${encodeURIComponent(city)}`)
.then(response => response.json())
.then(data => console.log(data));

