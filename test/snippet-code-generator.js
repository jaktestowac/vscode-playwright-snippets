const code = `
import { test, expect } from "@playwright/test";

test.describe("", () => {
    test.beforeEach(async ({ page }) => {
        // TODO: open the page
    });

    test.afterEach(async ({ page }) => {
        // TODO: clear the data after the test
    });

    test("", async ({ page }) => {
        // Arrange:
        // Act:
        // Assert:
    });
});
`;

const lines = code.split("\n");
const formattedCode = lines.map((line) => line.replace(/ {4}/g, "\t"));

while (formattedCode.length > 0 && formattedCode[0].trim() === "") {
  formattedCode.shift();
}

while (
  formattedCode.length > 0 &&
  formattedCode[formattedCode.length - 1].trim() === ""
) {
  formattedCode.pop();
}

console.log(JSON.stringify(formattedCode, null, 2));
