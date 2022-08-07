function listGames() {
	let storage = window.localStorage;
	let games = [];
	for (let i = 0; storage.getItem("game:" + i) != null; i++) {
		games.push(storage.getItem("game:" + i));
	}
	for (key of Object.keys(gamelist)) {
		games.push(key);
	}
	return games;
}

function getGameUrl(game) {
	let games = listGames();
	if (!(games.some(e => e == game))) { return null };
	let ret = window.localStorage.getItem(game + ":url");
	if (ret === null) {
		ret = gamelist[game];
	}
	return ret;
};

function getGameTitle(game) {
	let games = listGames();
	if (!(games.some(e => e == game))) { return null };
	let ret = window.localStorage.getItem(game + ":title");
	if (ret === null) {
		ret = gamenames[game];
	}
	return ret;
}

function getGameInfo(game) {
	let games = listGames();
	if (!(games.some(e => e == game))) { return null };
	let ret = window.localStorage.getItem(game + ":info");
	if (ret === null) {
		ret = gameinfo[game];
	}
	return ret;
}

function getGameTags(game) {
	let games = listGames();
	if (!(games.some(e => e == game))) { return null };
	let ret = window.localStorage.getItem(game + ":tags");
	if (ret === null) {
		ret = gametags[game];
	}
	if (ret === null) {
		return null;
	} else {
		return ret.split(' ');
	};
}
