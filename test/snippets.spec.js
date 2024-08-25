const assert = require("assert");
const snippets = require("../snippets/snippets.json");
const { it } = require("mocha");

describe("snippets", () => {
  it("should have at least one snippet", () => {
    assert.strictEqual(Object.keys(snippets).length > 0, true);
  });

  describe("for each snippet...", () => {
    for (const [key, value] of Object.entries(snippets)) {
      describe(`Snippet: ${key}`, () => {
        it(`should have a description for ${key}`, () => {
          assert.notStrictEqual(value.description, undefined);
          assert.strictEqual(value.description.length > 0, true);
        });
        it(`should have a prefix for ${key}`, () => {
          assert.notStrictEqual(value.prefix, undefined);
          assert.strictEqual(value.prefix.length > 0, true);
        });
        it(`should have a body for ${key}`, () => {
          assert.notStrictEqual(value.body, undefined);
          assert.strictEqual(value.body.length > 0, true);
          assert.ok(
            typeof value.body === "string" || Array.isArray(value.body),
            `Invalid body type for ${key}`
          );
        });
        it(`should have a category for ${key}`, () => {
          assert.notStrictEqual(value.category, undefined);
          assert.strictEqual(value.category.length > 0, true);
        });
      });
    }
  });
});
