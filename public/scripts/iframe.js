function updateGame() {
	document.getElementById("iframe").src = gamelist[location.hash.substr(1)];
	document.title = gamenames[location.hash.substr(1)];
};

if (location.hash.substr(1) != "") {
	updateGame();
};

window.addEventListener("hashchange", updateGame, false);
