const snippets = require("../snippets/snippets.json");
const fs = require("fs");

const sortedSnippetsByKey = Object.keys(snippets).sort((a, b) =>
  snippets[a].prefix.localeCompare(snippets[b].prefix)
);

// Form the table
let table = "| Snippet   | Description                          |\n";
table += "| --------- | ------------------------------------ |\n";

for (const snippetKey of sortedSnippetsByKey) {
  table += `| \`${snippets[snippetKey].prefix}\` | ${snippets[snippetKey].description} |\n`;
}

// Read the README.md file
const readmePath = "./README.md";
const readmeContent = fs.readFileSync(readmePath, "utf8");

// Replace the section ## Playwright with the generated table
const updatedReadmeContent = readmeContent.replace(
  /## Playwright[\s\S]*?#/m,
  `## Playwright\n\n${table}\n\n#`
);

// Write the updated content back to the README.md file
fs.writeFileSync(readmePath, updatedReadmeContent, "utf8");

console.log("README.md updated successfully.");
