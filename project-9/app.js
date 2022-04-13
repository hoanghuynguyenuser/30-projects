// fetch('https://api.openweathermap.org/data/2.5/weather?q=ha noi&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667')
const search = document.querySelector('.search')
const weather = document.querySelector('.weather')
console.log(weather)
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const time = document.querySelector('.time')
const value = document.querySelector('.value')
const wind = document.querySelector('.wind span')
const visibility = document.querySelector('.visibility span')
const cloud = document.querySelector('.cloud span')
var cityName ='ha noi'
renderWeather(cityName)

search.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        cityName = e.target.value.trim()
        renderWeather(cityName)
    }
})


function renderWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9667289825cf4c6adad5a81ae1e5bbc3`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        city.innerText = data.name
        country.innerText = data.sys.country
        time.innerText = new Date().toLocaleString()
        console.log([new Date()])

        value.innerText = Math.floor(data.main.temp)
        if (data.main.temp >= 18) {
            weather.classList.add('hot')
            weather.classList.remove('cold')
        } else { 
            weather.classList.add('cold')
        }

        wind.innerText = data.wind.speed
        visibility.innerText = data.visibility
        cloud.innerText = `${data.clouds.all} %`
    })
}