window.onload = function () {
	updateNavbar();
	updateFooter();
	//twitchCheckIfLive();
};

function updateNavbar() {
	const navbar = document.getElementById("navbar");
	fetch('/assets/data/navbar.json')
		.then(response => response.json())
		.then(data => {
			const navbarData = data.navbar;
			const logoImageLink = document.createElement("a");
			logoImageLink.id = "homeLink";
			logoImageLink.href = navbarData[0].Link;
			logoImageLink.style = "padding: 0 !important; background-color: #333 !important; border: none !important;";
			navbar.appendChild(logoImageLink);
			const logoImage = document.createElement("img");
			logoImage.src = navbarData[0].Image;
			logoImage.height = 47;
			logoImage.width = 47;
			logoImageLink.appendChild(logoImage);

			const myLinks = document.createElement("div");
			myLinks.id = "myLinks";
			navbar.appendChild(myLinks);

			for (let i = 0; i < navbarData.length; i++) {
				if (navbarData[`${i}`].Active === true) {

					const newLink = document.createElement("a");
					newLink.href = navbarData[`${i}`].Link;
					newLink.innerHTML = navbarData[`${i}`].Title;

					if (navbarData[`${i}`].Title === "Home") {
						newLink.style = "border-left: none!important;";
					}
					if (navbarData[`${i}`].MobileHide === true) {
						newLink.className = "hiddenNavPage";
					}
					if (document.title.includes(navbarData[`${i}`].Title)) {
						newLink.classList.add("active");
					}
					if (navbarData[`${i}`].Title === "Store") {
						newLink.target = "_Blank"
					}

					myLinks.appendChild(newLink);
				}
			}

			const mobileMenuButton = document.createElement("a");
			mobileMenuButton.className = "icon";
			mobileMenuButton.addEventListener("click", () => {
				mobileMenu();
			});
			navbar.appendChild(mobileMenuButton);
			const iClass = document.createElement("i");
			iClass.className = "fa fa-bars";
			mobileMenuButton.appendChild(iClass);
		});
}

function mobileMenu() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function updateFooter() {
	fetch('/assets/data/footer.json')
		.then(response => response.json())
		.then(data => {
			const footerData = data.Footer;
			const footerBar = document.getElementById("footer");

			for (let i = 0; i < footerData.length; i++) {
				if (footerData[`${i}`].Active === true) {
					const newLinkDiv = document.createElement("div");
					newLinkDiv.className = "footerIconDivs";
					footerBar.appendChild(newLinkDiv);

					const newLink = document.createElement("a");
					newLink.href = footerData[`${i}`].Link;
					newLinkDiv.appendChild(newLink);

					const newFooterIcon = document.createElement("img");
					newFooterIcon.className = "footerIcons";
					newFooterIcon.src = footerData[`${i}`].Image;
					newFooterIcon.alt = footerData[`${i}`].Title;
					newLink.appendChild(newFooterIcon);
				}
			}
		});
}

/* Requires OAuth with Twitch and I cba doing that - espicially since I don't stream anymore
function twitchCheckIfLive() {
	xhr.open('GET', 'https://api.twitch.tv/helix/streams?user_id=101129910', true);
	xhr.setRequestHeader('client-id', '3owpqp1m6zjzop8q6nsnr2bc171iey');
	xhr.setRequestHeader('Authorization', 'Bearer cptrvxsphcctou8ngml6b5v4ct8b9b');
	xhr.send();

	xhr.onload = function () {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.response);
			console.log(response);
			let checkLive = response.data[0].type;
			
			if (checkLive === 'live') {
				document.getElementById("twitchIcon").src = "images/socials/twitchLive.png";
				document.getElementById("twitchIcon").style.width = "30px";
				document.getElementById("twitchIcon").style.height = "46px";
			}
		}
	};
}
*/

// JQuery below just because :)

$(document).ready(function () {
	function randomPosition() {
		var windowHeight = $(window).height() - $('.forTheMeme').outerHeight();
		var windowWidth = $(window).width() - $('.forTheMeme').outerWidth();
		var randomTop = Math.floor(Math.random() * windowHeight);
		var randomLeft = Math.floor(Math.random() * windowWidth);

		return { top: randomTop, left: randomLeft };
	}

	$('.forTheMeme').css(randomPosition());

	$('.forTheMeme').hover(function () {
		$(this).animate({ opacity: '1', width: '800px', height: '800px' }, "fast");
		$(this).animate({ opacity: '1', width: '650px', height: '650px' }, "slow");
	}, function () {
		$(this).animate({ opacity: '1', width: '1px', height: '1px' });
	});

	$('#lul').slideUp(0)

	if ($(window).width() < 960) {
		$('#lul').hide();
	}
	else {
		$('.box').hover(function () {
			$('#lul').slideDown(1400);
		}, function () {
			$('#lul').slideUp(100);
		});
	}
})
