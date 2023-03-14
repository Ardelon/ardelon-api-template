#!/usr/bin/env node
console.log("Hello from my npx package");

const fs = require("fs");
const { ss } = require("./example");
console.log(ss);

const writeFile = (file, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, data, "utf8", (err) => {
			if (err) reject(err);
			else resolve();
		});
	});
};

writeFile("./npxTest.txt", ss);
