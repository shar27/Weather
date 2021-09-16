const description = document.getElementById('description')
const weather = document.getElementById('weather');
const temp = document.getElementById('temp');
const img = document.getElementById('img');
const form = document.querySelector('form');
const cityName = document.getElementById('city');

form.addEventListener('submit', getCity);

//create a function called getCity
function getCity(e) {
  e.preventDefault();
  const cityUrl = document.getElementById('name').value;

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityUrl + '&units=metric&APPID=eebdc0fba9291fe215ae59f682cd5fe9', { mode: 'cors' })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      temp.innerHTML = Math.floor(response.main.temp) + ' degrees celsius ';
      weather.innerHTML = response.weather[0].main;
      description.innerHTML = response.weather[0].description.toUpperCase();
      cityName.innerHTML = response.name + '<i class="bi bi-building" style = "font-size: 3rem"; ></i>';
      img.src = 'https://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png';
    });
} //fetch functions