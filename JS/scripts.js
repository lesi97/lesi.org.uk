window.onload = function () {
	checkUserPreferences();
};

document.addEventListener("DOMContentLoaded", function () {
	updateNavbar();
	updateFooter();
	//twitchCheckIfLive();
	checkUserPreferences();
});




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
					if (navbarData[`${i}`].Title != "Settings") { 
						newLink.innerHTML = navbarData[`${i}`].Title;
					}

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
					if (navbarData[`${i}`].Title === "Settings") {
						if (screen.width > 767) {
							newLink.style = "position: absolute; right: 5px;";
							const settingsIcon = document.createElement("img");

							if (newLink.classList.contains("active")) {
								settingsIcon.src = navbarData[`${i}`].imageDark;
							} else {
								settingsIcon.src = navbarData[`${i}`].imageLight;
								newLink.onmouseover = function () { settingsIcon.src = navbarData[`${i}`].imageDark; }
								newLink.onmouseleave = function () { settingsIcon.src = navbarData[`${i}`].imageLight; }
							}
							settingsIcon.height = 22;
							settingsIcon.width = 22;

							newLink.appendChild(settingsIcon);
						} else {
							newLink.innerHTML = navbarData[`${i}`].Title;
						}
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


	

function checkUserPreferences() {
	const docBod = document.body;
	const mainBox = document.getElementById("box");
	const navBar = document.getElementById("navbar");
	const uploadBox = document.getElementById("dropContainer");
	const docInput = document.getElementsByClassName("inputsCss");
	const docButtons = document.getElementsByClassName("buttonsCss");
	const svgTextArea = document.getElementById("svgInputArea");
	const nightModeTrueFalse = localStorage.getItem("nightMode");




	if (nightModeTrueFalse === "true") {
		docBod.style.background = "rgb(0,0,0)";
		docBod.style.background = "-moz-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
		docBod.style.background = "-webkit-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
		docBod.style.background = "-o-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
		docBod.style.background = "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";

		if (mainBox != null) {
			mainBox.style.background = "rgba(38,38,38,1)";
			mainBox.style.color = "rgba(242,242,242,1)";
		}

		[...docInput].forEach(function (inputElement) {
			inputElement.style.border = "none";
		});

		[...docButtons].forEach(function (inputElement) {
			inputElement.style.border = "none";
			inputElement.style.background = "#fff";
			inputElement.style.color = "black";
			inputElement.onmouseover = function () {
				inputElement.style.background = "black";
				inputElement.style.color = "white";
			}
			inputElement.onmouseleave = function () {
				inputElement.style.background = "#fff";
				inputElement.style.color = "black";
			}
		});

		if (svgTextArea != null) {
			svgTextArea.style.border = "none";
			svgTextArea.style.background = "rgb(0,0,0)";
			svgTextArea.style.background = "-moz-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			svgTextArea.style.background = "-webkit-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			svgTextArea.style.background = "-o-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			svgTextArea.style.background = "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			svgTextArea.style.color = "white";
		}

		if (uploadBox != null) {
			uploadBox.style.background = "rgb(0,0,0)";
			uploadBox.style.background = "-moz-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			uploadBox.style.background = "-webkit-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			uploadBox.style.background = "-o-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			uploadBox.style.background = "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(33,8,36,1) 49%, rgba(8,9,9,1) 100%)";
			uploadBox.style.outline = "2px dashed #f2f2f2";
			uploadBox.style.outline = "2px dashed #f2f2f2";
			//uploadBox.style.boxShadow = "-5px 10px 30px rgba(242, 242, 242, 0.3)"
			uploadBox.style.boxShadow = "none;"
		}


	} else {

		docBod.style.background = "rgba(204, 105, 224, 1)";
		docBod.style.background = "-moz-linear-gradient(-45deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";
		docBod.style.background = "-webkit-linear-gradient(-45deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";
		docBod.style.background = "-o-linear-gradient(-45deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";
		docBod.style.background = "linear-gradient(135deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";

		if (mainBox != null) {
			box.style.background = "rgba(242,242,242,1)";
			mainBox.style.color = "black";
		}

		[...docInput].forEach(function (inputElement) {
			inputElement.style.border = "2px solid #8d0cf7";
		});

		[...docButtons].forEach(function (inputElement) {
			inputElement.style.border = "2px solid #8d0cf7";
		});

		if (svgTextArea != null) {
			svgTextArea.style.border = "1px solid #8d0cf7";
		}

		if (uploadBox != null) {
			uploadBox.style.background = "rgba(204, 105, 224, 1)";
			uploadBox.style.background = "-moz-linear-gradient(-45deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";
			uploadBox.style.background = "-webkit-linear-gradient(-45deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";
			uploadBox.style.background = "-o-linear-gradient(-45deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";
			uploadBox.style.background = "linear-gradient(135deg, rgba(204,105,224,1) 0%, rgba(78,27,219,1) 100%)";
			uploadBox.style.outline = "2px dashed #015a96";
			uploadBox.style.boxShadow =	"-5px 10px 30px rgba(1, 90, 150, 0.3)"
		}

	}
}





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

