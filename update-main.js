const fs = require("fs");
const path = require("path");

const packageJsonPath = path.resolve(__dirname, "package.json");
const packageJson = require(packageJsonPath);

packageJson.main = "./index.ts";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
console.log('Updated main field in package.json to "./index.ts"');
