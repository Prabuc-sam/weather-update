document.getElementById('get-weather').addEventListener('click', function () {
  const city = document.getElementById('city-input').value;
  const apiKey = '0ffff03bda1940fe02a950cfa213a6cf';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherCondition = data.weather[0].main.toLowerCase(); // e.g., clear, rain, snow
      const weatherInfo = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weather-result').innerHTML = weatherInfo;

      // Update background image based on weather
      let backgroundImage = '';
      if (weatherCondition.includes('clear')) {
        backgroundImage = 'url(https://source.unsplash.com/1920x1080/?clear-sky)';
      } else if (weatherCondition.includes('cloud')) {
        backgroundImage = 'url(https://source.unsplash.com/1920x1080/?cloudy)';
      } else if (weatherCondition.includes('rain')) {
        backgroundImage = 'url(https://source.unsplash.com/1920x1080/?rain)';
      } else if (weatherCondition.includes('snow')) {
        backgroundImage = 'url(https://source.unsplash.com/1920x1080/?snow)';
      } else {
        backgroundImage = 'url(https://source.unsplash.com/1920x1080/?weather)';
      }

      document.body.style.backgroundImage = backgroundImage;
    })
    .catch(error => {
      document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
    });
});
