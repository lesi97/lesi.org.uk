fetch('/data/links.json')
  .then(response => response.json())
  .then(data => {
	var twitchURL = data.Twitch;
	var youtubeURL = data.YouTube;
	var tiktokURL = data.TikTok;
	var twitterURL = data.Twitter;
	var instaURL = data.Instagram;
	document.getElementById("twitch").href = twitchURL;
	document.getElementById("youtube").href = youtubeURL;
	document.getElementById("tiktok").href = tiktokURL;
	document.getElementById("twitter").href = twitterURL;
	document.getElementById("instagram").href = instaURL;
  });