function listGames() {
    let storage = window.localStorage;
	let games = [];
    for (let i = 0; storage.getItem("game:" + i) != null; i++) {
        games.append(storage.getItem("game:" + i));
    }
    for (key of Object.keys(gamelist)) {
       games.append(key);
    }
    return games;
}

function getGameUrl(game) {
    let games = listGames();
    if (!(games.contains(game))) { return null };
    let ret = window.localStorage.getItem(game + ":url");
	if (ret === null) {
        ret = gamelist[game];
	}
	return ret;
};

function getGameTitle(game) {
    let games = listGames();
    if (!(games.contains(game))) { return null };
    let ret = window.localStorage.getItem(game + ":title");
	if (ret === null) {
        ret = gamenames[game];
	}
	return ret;
}

function getGameInfo(game) {
    let games = listGames();
    if (!(games.contains(game))) { return null };
    let ret = window.localStorage.getItem(game + ":info");
	if (ret === null) {
        ret = gameinfo[game];
	}
	return ret;
}
