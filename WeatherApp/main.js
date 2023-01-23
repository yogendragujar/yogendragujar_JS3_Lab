
const api ={
    key:"efea76a5d7784e585bfa6599f2d103a0",
    base:"https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('#searchbox');
searchBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
        getResults(searchBox.value);
    }
});

function getResults (query) {
    //console.log(food)
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then((response)=>{
        // console.log(response)
        displayResults(response)});
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
