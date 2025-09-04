const apiKey = "ef62cc6b5e9be8b6786a7dd87978dca2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	const data = await response.json();


	// ايرور هاندلنج اهو
	if (data.cod == "404") {
        document.querySelector(".city").innerHTML = "اكتب اسم المدينة صح 😒";
        document.querySelector(".temp").innerHTML = "--";
        document.querySelector(".wind").innerHTML = "--";
        document.querySelector(".humidity").innerHTML = "--";

        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#232437";

        return; // 
    }

	console.log(data);

	let cityName = data.name;
	if (cityName.toLowerCase() === "cairo") {
		// الا رايك فى الشياكه 🌚
		cityName = "Cairo ❤️";
		document.body.style.backgroundImage = "url('images/H2.jpg')";
    	document.body.style.backgroundSize = "cover";
    	document.body.style.backgroundPosition = "center"; 
	} else {
		// نرجع الخلفيه للونها الاصلى
		document.body.style.backgroundImage = "none";
		document.body.style.backgroundColor = "#232437";
	}

	document.querySelector(".city").innerHTML = cityName;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
	document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

	if(data.weather[0].main == "Clouds"){
		weatherIcon.src = "images/clouds.png";
	} else if (data.weather[0].main == "Clear"){
		weatherIcon.src = "images/clear.png";
	} else if (data.weather[0].main == "Rain"){
		weatherIcon.src = "images/rain.png";
	} else if (data.weather[0].main == "Drizzle"){
		weatherIcon.src = "images/drizzle.png";
	} else if (data.weather[0].main == "Mist"){
		weatherIcon.src = "images/mist.png";
	}
}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
});

// Default city
checkWeather("Alexandria");

















