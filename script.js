// Weather Functionality
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
      const weatherInfo = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weather-result').innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
    });
});

// Age Calculator Functionality
document.getElementById('calculate-age').addEventListener('click', function () {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  document.getElementById('age-result').innerHTML = `<p>Your age is ${age} years.</p>`;
});

// Toggle Sections with Menu
document.getElementById('weather-menu').addEventListener('click', function () {
  document.getElementById('weather-section').classList.remove('hidden');
  document.getElementById('age-section').classList.add('hidden');
});

document.getElementById('age-menu').addEventListener('click', function () {
  document.getElementById('age-section').classList.remove('hidden');
  document.getElementById('weather-section').classList.add('hidden');
});
