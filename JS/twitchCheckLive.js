xhr.open('GET', 'https://api.twitch.tv/helix/streams?user_id=101129910', true);
xhr.setRequestHeader('client-id', '3owpqp1m6zjzop8q6nsnr2bc171iey');
xhr.setRequestHeader('Authorization', 'Bearer cptrvxsphcctou8ngml6b5v4ct8b9b');
xhr.send();

xhr.onload = function() {
   if (xhr.status === 200) {
    let response = JSON.parse(xhr.response);
    	let checkLive = response.data[0].type;
      if (checkLive === 'live') {
	 document.getElementById("twitchIcon").src = "images/socials/twitchLive.png";
      document.getElementById("twitchIcon").style.width = "30px";
      document.getElementById("twitchIcon").style.height = "46px";
	 } 
  }
};

