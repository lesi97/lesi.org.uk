// Get the latitude and longitude from the Maxmind GeoIP2 API
$.support.cors = true;


window.onload = navigator.geolocation.getCurrentPosition(function(position) {
    // set the cookie with the longitude and latitude
    document.cookie = "latitude=" + position.coords.latitude;
    document.cookie = "longitude=" + position.coords.longitude;
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
  });
		
		
		
// check if the cookie is already set
if (document.cookie.indexOf('latitude') == -1 && document.cookie.indexOf('longitude') == -1) {
  // if not, use navigator.geolocation to get the user's coordinates
  navigator.geolocation.getCurrentPosition(function(position) {
    // set the cookie with the longitude and latitude
    document.cookie = "latitude=" + position.coords.latitude;
    document.cookie = "longitude=" + position.coords.longitude;
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
  });
} else {
  // if the cookie is already set, get the values of the cookie
  var latitude = getCookie('latitude');
  var longitude = getCookie('longitude');

  // print the results in the console
  console.log('latitude: ' + latitude);
  console.log('longitude: ' + longitude);
}

// helper function to get the values of the cookie
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


window.onload = function response() {

        // Use the latitude and longitude to get the current weather from FCC Weather API
        var weatherURL = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
		console.log(weatherURL);
        $.getJSON(weatherURL, function(weatherData) {
			var location = weatherData.name;
			var temperature = Math.round(weatherData.main.temp);
			var pressure = weatherData.main.pressure;
			var humidity = weatherData.main.humidity;
			var windSpeed = weatherData.wind.speed;
			
			var milesPerHour = Math.round(parseInt(windSpeed) * 2.237);
			
			var feelsLike = Math.round(weatherData.main.feels_like);
			var weather = weatherData.weather[0].main;
			var weatherIco = weatherData.weather[0].icon;
            var weatherInfo = '<div class="weatherDivs" style="margin-top:none; width="90%">Current weather in ' + location + '</div> <div class="weatherDivs">Temperature: <div onclick="convertTemp1()" id="temperature1">' + temperature + 'c</div></div><div class="weatherDivs">Feels Like: <div onclick="convertTemp2()" id="temperature2">' + feelsLike + 'c</div></div><div class="weatherDivs">Humidity: ' + humidity + '&#37;</div><div class="weatherDivs">Wind Speed: ' + milesPerHour + 'mph</div>';
			
			var weatherIconImage = '<img src="' + weatherIco + '"><!--<br>' + weather + '-->';
            
			if (location == "Shuzenji"){
				//Weather API has a bug that shows this location sometimes
				
			$("#weather").html('<div style="margin-left: 5%;">Error getting weather information, please refresh the page to try again.</div>');
				
			} else {
			$("#weather").html(weatherInfo);
			
			$("#weatherIcon").html(weatherIconImage);
			
			document.getElementById("temperature").innerHTML = temperature;
			
			document.getElementById("weatherIcon").src = weatherIco;
			
			document.getElementById("city").innerHTML = location;
			
			document.getElementById("feelsLike").innerHTML = feelsLike;
			};
			
        });
		//}, 60000);
    };

setInterval(response, 10000);


    function convertTemp1(){
  
  // Get the value of the div
  let tempValue1 = document.getElementById("temperature1").innerHTML;
  
  // Check which type of temperature is in the div
  if (tempValue1.includes("c")) {
    // Convert from Celsius to Fahrenheit
    tempValue1 = parseFloat((tempValue1.replace("c", "") * 9/5) + 32).toFixed(0);
    // Add "F" to the end of the value
    tempValue1 = tempValue1 + "f";
  } else {
    // Convert from Fahrenheit to Celsius
    tempValue1 = parseFloat((tempValue1.replace("f", "") - 32) * 5/9).toFixed(0);
    // Add "C" to the end of the value
    tempValue1 = tempValue1 + "c";
  }
  
  // Update the div with the new value
  document.getElementById("temperature1").innerHTML = tempValue1;
}


    function convertTemp2(){
  
  // Get the value of the div
  let tempValue2 = document.getElementById("temperature2").innerHTML;
  
  // Check which type of temperature is in the div
  if (tempValue2.includes("c")) {
    // Convert from Celsius to Fahrenheit
    tempValue2 = parseFloat((tempValue2.replace("c", "") * 9/5) + 32).toFixed(0);
    // Add "F" to the end of the value
    tempValue2 = tempValue2 + "f";
  } else {
    // Convert from Fahrenheit to Celsius
    tempValue2 = parseFloat((tempValue2.replace("f", "") - 32) * 5/9).toFixed(0);
    // Add "C" to the end of the value
    tempValue2 = tempValue2 + "c";
  }
  
  // Update the div with the new value
  document.getElementById("temperature2").innerHTML = tempValue2;
}