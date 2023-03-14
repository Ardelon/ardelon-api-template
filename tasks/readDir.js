#!/usr/bin/env node
console.log("read directory Recursively");
const fs = require("fs");

function readDirRecursively(dirPath) {
	const files = fs.readdirSync(dirPath);
	const fileInfos = [];

	files.forEach((file) => {
		const filePath = `${dirPath}/${file}`;
		const fileInfo = {
			name: file,
			path: filePath,
			isDirectory: fs.statSync(filePath).isDirectory(),
		};

		if (fileInfo.isDirectory) {
			fileInfo.children = readDirRecursively(filePath);
		}

		fileInfos.push(fileInfo);
	});

	return fileInfos;
}

const directoryPath = "./";
const directoryTree = readDirRecursively(directoryPath);

console.log(directoryTree);
