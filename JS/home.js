window.onload = function () {
	getIp();
	getTime();
	getGeoLocationData();
};

//####################################################################################################################

function getIp() { // The php script does not work on localhost
	const xhr = new XMLHttpRequest();
	xhr.open('GET', './php/ip.php', true);
	xhr.onload = function () {
		const ipv4 = this.response;
		sessionStorage.setItem("ipv4", ipv4);
	}
	xhr.send();
}
getIp(); // This is here as the window.onload doesn't seem to work here, will fix it another day :)

//####################################################################################################################

function getTime() {
	const ipv4 = sessionStorage.getItem("ipv4");
	xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://worldtimeapi.org/api/ip/' + ipv4, true);
	xhr.onload = function () {
		var time = JSON.parse(this.responseText).datetime;
		var hours = time.substring(11, 13);
		var minutes = time.substring(14, 16);
		var seconds = time.substring(17, 19);
		document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;

		var year = parseInt(time.substring(0, 4));
		var month = time.substring(5, 7);
		var day = time.substring(8, 10);

		var dayString = JSON.parse(this.responseText).day_of_week;
		var day1;
		if (dayString == 1) { day1 = 'Monday'; }
		else if (dayString == 2) { day1 = 'Tuesday'; }
		else if (dayString == 3) { day1 = 'Wednesday'; }
		else if (dayString == 4) { day1 = 'Thursday'; }
		else if (dayString == 5) { day1 = 'Friday'; }
		else if (dayString == 6) { day1 = 'Saturday'; }
		else if (dayString == 0) { day1 = 'Sunday'; }

		var month1;
		if (month == 1) { month1 = 'January'; }
		else if (month == 2) { month1 = 'February'; }
		else if (month == 3) { month1 = 'March'; }
		else if (month == 4) { month1 = 'April'; }
		else if (month == 5) { month1 = 'May'; }
		else if (month == 6) { month1 = 'June'; }
		else if (month == 7) { month1 = 'July'; }
		else if (month == 8) { month1 = 'August'; }
		else if (month == 9) { month1 = 'September'; }
		else if (month == 10) { month1 = 'October'; }
		else if (month == 11) { month1 = 'November'; }
		else if (month == 12) { month1 = 'December'; }

		document.getElementById('date').innerHTML = day1 + ' ' + day + ' ' + month1 + ' ' + year;
	}
	xhr.send();
}

setInterval(getTime, 1000);

//####################################################################################################################

function getGeoLocationData() {
	const url = "https://ipwhois.app/json/";
	const ipv4 = sessionStorage.getItem("ipv4");
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url + ipv4, true);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onload = function () {
		const response = this.response;
		const data = JSON.parse(response);
		if (data.success != false) {
			//console.log(data);
			const latitude = data.latitude;
			const longitude = data.longitude;
			sessionStorage.setItem("latitude", latitude);
			sessionStorage.setItem("longitude", longitude);
		} else {
			setTimeout(getGeoLocationData, 1000);
		}

	}
	xhr.send();
	setTimeout(getWeatherInfo, 100);
}
getGeoLocationData();

//####################################################################################################################

function getWeatherInfo() {

	const latitude = sessionStorage.getItem("latitude");
	const longitude = sessionStorage.getItem("longitude");

	const weatherURL = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;

	const xhr = new XMLHttpRequest();
	xhr.open('GET', weatherURL, true);
	xhr.onload = function () {
		const response = this.response;
		const parsedData = JSON.parse(response);
		//console.log(this.response);
		// The api I'm using has a bug where it sometimes thinks you're in Shuzenji, sorry people from Shuzenji
		if (!this.response.includes("error") && parsedData.name != "Shuzenji") {
			sessionStorage.setItem("weatherInfo", response);
			localStorage.setItem("weatherInfo", response);
		}
	}
	xhr.send();
	updateWeather();
}
setInterval(getWeatherInfo(), 1000);

function updateWeather() {

	const mainArea = document.getElementById("box");
	const weatherArea = document.getElementById("weather");

	if (sessionStorage.getItem("weatherInfo")) {

		const weatherSessionStorage = sessionStorage.getItem("weatherInfo");
		const weatherData = JSON.parse(weatherSessionStorage);
		const location = weatherData.name;
		const temperature = Math.round(weatherData.main.temp);
		const pressure = weatherData.main.pressure;
		const humidity = weatherData.main.humidity;
		const windSpeed = weatherData.wind.speed;
		const milesPerHour = Math.round(parseInt(windSpeed) * 2.237);
		const feelsLike = Math.round(weatherData.main.feels_like);
		const weather = weatherData.weather[0].main;
		const weatherIco = weatherData.weather[0].icon;
		const weatherIconImage = '<img src="' + weatherIco + '"><!--<br>' + weather + '-->';
		const weatherIcon = document.getElementById("weatherIcon");
		const weatherInfo = '<div class="weatherDivs" style="margin-top:none; width="90%">Current weather in ' + location + '</div> <div class="weatherDivs">Temperature: <div onclick="convertTemp1()" id="temperature1">' + temperature + 'c</div></div><div class="weatherDivs">Feels Like: <div onclick="convertTemp2()" id="temperature2">' + feelsLike + 'c</div></div><div class="weatherDivs">Humidity: ' + humidity + '&#37;</div><div class="weatherDivs">Wind Speed: ' + milesPerHour + 'mph</div>';
		weatherArea.innerHTML = weatherInfo;
		weatherIcon.innerHTML = weatherIconImage;
	} else {
		setTimeout(getWeatherInfo, 100);
	}

}


//####################################################################################################################

function convertTemp1() {

	let tempValue1 = document.getElementById("temperature1").innerHTML;
	if (tempValue1.includes("c")) {
		tempValue1 = parseFloat((tempValue1.replace("c", "") * 9 / 5) + 32).toFixed(0);
		tempValue1 = tempValue1 + "f";
	} else {
		tempValue1 = parseFloat((tempValue1.replace("f", "") - 32) * 5 / 9).toFixed(0);
		tempValue1 = tempValue1 + "c";
	}
	document.getElementById("temperature1").innerHTML = tempValue1;
}

function convertTemp2() {
	let tempValue2 = document.getElementById("temperature2").innerHTML;
	if (tempValue2.includes("c")) {
		tempValue2 = parseFloat((tempValue2.replace("c", "") * 9 / 5) + 32).toFixed(0);
		tempValue2 = tempValue2 + "f";
	} else {
		tempValue2 = parseFloat((tempValue2.replace("f", "") - 32) * 5 / 9).toFixed(0);
		tempValue2 = tempValue2 + "c";
	}
	document.getElementById("temperature2").innerHTML = tempValue2;
}