// requires gameinfo.js to be imported

function updateGame() {
	let game = location.hash.substr(1);
	document.getElementById("iframe").src = getGameUrl(game);
	document.title = getGameTitle(game);
};

if (location.hash.substr(1) != "") {
	updateGame();
};

window.addEventListener("hashchange", updateGame, false);
