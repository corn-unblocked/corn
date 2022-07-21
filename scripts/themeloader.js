css = document.createElement("style");
if (window.localStorage.getItem("mainTheme") != null) {
	css.innerHTML = window.localStorage.getItem("mainTheme");
}
document.head.appendChild(css);
