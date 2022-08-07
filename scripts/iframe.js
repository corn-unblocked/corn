// requires gameinfo.js to be imported

function updateGame() {
	let game = location.hash.substr(1);
	let gameUrl = getGameUrl(game);
	let iframe = document.getElementById("iframe");
	if (gameUrl.length == 0) {
		iframe.src = "/other/select.html";
		document.title = "Corn iframe";
	}
	else {
		iframe.src = getGameUrl(game);
		document.title = getGameTitle(game);
	}
};

if (location.hash.substr(1) != "") {
	updateGame();
};

window.addEventListener("hashchange", updateGame, false);
