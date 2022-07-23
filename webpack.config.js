const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "public/src"),
		filename: "bundle.js",
		library: {
			name: "Firebase",
			type: "var"
		}
	}
};
