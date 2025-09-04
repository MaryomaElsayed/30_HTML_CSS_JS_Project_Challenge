const apiKey = "ef62cc6b5e9be8b6786a7dd87978dca2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	const data = await response.json();

	console.log(data);

	let cityName = data.name;
	if (cityName.toLowerCase() === "cairo") {
		cityName = "Cairo ❤️";
		document.body.style.backgroundImage = "url('images/cairo.jpg')";
    	document.body.style.backgroundSize = "cover";
    	document.body.style.backgroundPosition = "center"; 
	}

	document.querySelector(".city").innerHTML = cityName;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
	document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
});

// Default city
checkWeather("Alexandria");
