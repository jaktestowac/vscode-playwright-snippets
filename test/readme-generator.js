const snippets = require("../snippets/snippets.json");

// Form the table
let table = "| Snippet   | Description                          |\n";
table += "| --------- | ------------------------------------ |\n";

for (const snippetKey in snippets) {
  table += `| ${snippets[snippetKey].prefix} | ${snippets[snippetKey].description} |\n`;
}

console.log(table);
