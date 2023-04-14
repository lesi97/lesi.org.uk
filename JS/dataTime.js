let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.ipify.org?format=json", false);
xhr.send();
let response = JSON.parse(xhr.response);
let ipv4 = response.ip;

function getTime() {
	xhr = new XMLHttpRequest();
	$.support.cors = true;
	xhr.open('GET', 'https://worldtimeapi.org/api/ip/'+ipv4, true);
	xhr.onload = function() {
		console.log(ipv4);
		var time = JSON.parse(this.responseText).datetime;
		var hours = time.substring(11,13);
		var minutes = time.substring(14,16);
		var seconds = time.substring(17,19);
		document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
		
		var year = parseInt(time.substring(0,4));
		var month = time.substring(5,7); 
		var day = time.substring(8,10); 
		
		var dayString = JSON.parse(this.responseText).day_of_week;
		var day1;
		if (dayString == 1) {day1 = 'Monday';} 
		else if (dayString == 2) {day1 = 'Tuesday';}
		else if (dayString == 3) {day1 = 'Wednesday';}
		else if (dayString == 4) {day1 = 'Thursday';}
		else if (dayString == 5) {day1 = 'Friday';}
		else if (dayString == 6) {day1 = 'Saturday';}
		else if (dayString == 0) {day1 = 'Sunday';}
		
		var month1;
		if (month == 1) {month1 = 'January';}
		else if (month == 2) {month1 = 'February';}
		else if (month == 3) {month1 = 'March';} 
		else if (month == 4) {month1 = 'April';} 
		else if (month == 5) {month1 = 'May';}
		else if (month == 6) {month1 = 'June';}
		else if (month == 7) {month1 = 'July';}
		else if (month == 8) {month1 = 'August';}
		else if (month == 9) {month1 = 'September';}
		else if (month == 10) {month1 = 'October';} 
		else if (month == 11) {month1 = 'November';}
		else if (month == 12) {month1 = 'December';}
		
		document.getElementById('date').innerHTML = day1 + ' ' + day + ' ' + month1 + ' ' + year;
	}
	xhr.send();
}

setInterval(getTime, 1000);

