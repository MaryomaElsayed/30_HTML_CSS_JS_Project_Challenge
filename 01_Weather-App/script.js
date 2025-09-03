const apiKey = "ef62cc6b5e9be8b6786a7dd87978dca2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Alexandria";

async function checkWeather(){
	const response = await fetch(apiUrl + `&appid=${apiKey}`);
	var data = await response.json();

	console.log(data);

	// update the dom let's goooooooooooooo !
	// يالى ابتديت الحب معااااك عمرى ابتدى و انا ويااااااااااك
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = data.main.temp;
	// قال ايييييييييه بيسالونى 😏
	// عنك يا نور عيونى 🌚
	
}


checkWeather();