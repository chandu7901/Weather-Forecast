let weather = {
    apiKey: "c454e02d3dfccf1109099e09b46a7344",
    fetchWeather: function(city) {
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=metric&appid=" 
    + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    //4a345552e903ae7750f99a5153dfc6c1
    },
    displayWeather: function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity,feels_like } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".feels").innerText = "Feels like: "+feels_like + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"; 
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"; 
    document.querySelector(".weather").classList.remove("loading");
    
    },  
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    }
    }; 
    
    document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
    });
    
    document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if(event.key == "Enter"){
    weather.search();
    }
    });
    
    weather.fetchWeather("Chittoor");