oldwindowopen = window.open
window.open = function (url, name, features) {
	newWindow = oldwindowopen(document.location.href, name, features)
	newWindow.document.getElementsByTagName("#iframe")[0].src = url;
}
