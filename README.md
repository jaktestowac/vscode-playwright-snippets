<p align="center">
  <img src="https://github.com/jaktestowac/vscode-playwright-snippets/blob/main/imgs/playwright-logo.png?raw=true" width="200px" alt="Playwright Logo">
</p>

<h1 align="center">VS Code - Playwright Snippets</h1>

# Description

This Visual Studio Code extension adds predefined useful code snippets for [Playwright](https://playwright.dev/).

<p align="center">
  <img src="https://github.com/jaktestowac/vscode-playwright-snippets/blob/main/imgs/preview-1.gif?raw=true" alt="Preview">
</p>

Snippets in Visual Studio Code (VS Code) are customizable templates that can be quickly inserted into your code.

Using snippets speeds up coding by reducing repetitive tasks, allowing for more efficient and error-free code writing.

# How to Use Snippets in VS Code

Snippets in Visual Studio Code (VS Code) are customizable templates that can be quickly inserted into your code. Here’s how to use them:

1. Insert a Snippet

   Type a trigger word (e.g. `pw-page`) followed by pressing `Tab` or `Ctrl + Space` to bring up the snippet suggestion. Select the desired snippet from the list.

2. Navigate through Fields

   After inserting a snippet, use `Tab` to jump between predefined placeholders within the snippet. You can customize or remove these fields as needed.

# Snippets List

Below you can find a list of all supported snippets.

## Playwright

| Snippet                                 | Description                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------ |
| `pw-afterAll`                           | Playwright afterAll block                                                      |
| `pw-afterEach`                          | Playwright afterEach block                                                     |
| `pw-beforeAll`                          | Playwright beforeAll block                                                     |
| `pw-beforeEach`                         | Playwright beforeEach block                                                    |
| `pw-check-dataLayer`                    | Check dataLayer                                                                |
| `pw-clear-cookies`                      | Clear all cookies in the browser context                                       |
| `pw-codegen-browser-default-profile`    | Run codegen with browser profile                                               |
| `pw-describe`                           | Basic describe suite with before/after hooks                                   |
| `pw-describe-full`                      | Describe suite with all before/after hooks                                     |
| `pw-download`                           | Handle file downloads                                                          |
| `pw-emulate-geolocation`                | Emulate a specific geolocation                                                 |
| `pw-eval`                               | Evaluate a JavaScript expression in the page context                           |
| `pw-expect-toBeDisabled`                | Expect an element to be disabled                                               |
| `pw-expect-toBeEditable`                | Expect an element to be editable                                               |
| `pw-expect-toBeEmpty`                   | Expect an element to be empty                                                  |
| `pw-expect-toBeEnabled`                 | Expect an element to be enabled                                                |
| `pw-expect-toBeFocused`                 | Expect an element to be focused                                                |
| `pw-expect-toBeHidden`                  | Expect an element to be hidden                                                 |
| `pw-expect-toBeInViewport`              | Expect an element to be in the viewport                                        |
| `pw-expect-toBeVisible`                 | Expect an element to be visible                                                |
| `pw-expect-toContainText`               | Expect an element to contain specific text                                     |
| `pw-expect-toHaveAccessibleDescription` | Expect an element to have an accessible description                            |
| `pw-expect-toHaveAccessibleName`        | Expect an element to have an accessible name                                   |
| `pw-expect-toHaveAttribute`             | Expect an element to have a specific attribute                                 |
| `pw-expect-toHaveClass`                 | Expect an element to have a specific class                                     |
| `pw-expect-toHaveCount`                 | Expect an element to have a specific count                                     |
| `pw-expect-toHaveCSS`                   | Expect an element to have specific CSS property                                |
| `pw-expect-toHaveId`                    | Expect an element to have a specific ID                                        |
| `pw-expect-toHaveJSProperty`            | Expect an element to have a specific JavaScript property                       |
| `pw-expect-toHaveRole`                  | Expect an element to have a specific role                                      |
| `pw-expect-toHaveScreenshot`            | Expect the page to have a screenshot                                           |
| `pw-expect-toHaveText`                  | Expect an element to have text                                                 |
| `pw-expect-toHaveTitle`                 | Expect the page to have a specific title                                       |
| `pw-expect-toHaveURL`                   | Expect the page to have a specific URL                                         |
| `pw-expect-toHaveValue`                 | Expect an element to have a specific value                                     |
| `pw-expect-toHaveValues`                | Expect an element to have specific values                                      |
| `pw-fixture-pom`                        | Playwright Fixture for Page Object Model (POM) class template                  |
| `pw-get-elements-from-viewport`         | Get elements from the viewport                                                 |
| `pw-goto`                               | Navigate to a URL                                                              |
| `pw-iframe-click`                       | Locate and click an element inside a frame                                     |
| `pw-iframe-fill`                        | Locate and fill an element inside a frame                                      |
| `pw-iframe-multiple-elements`           | Perform multiple interactions inside a frame, including waiting for an element |
| `pw-locator-handler`                    | Add a custom locator handler                                                   |
| `pw-locator-screenshot`                 | Take a screenshot of the element                                               |
| `pw-network-throttle-basic`             | Throttle network requests globally with a 100ms delay                          |
| `pw-network-throttle-css-js`            | Throttle loading of CSS and JavaScript resources                               |
| `pw-network-throttle-images`            | Throttle loading of image resources                                            |
| `pw-network-throttle-random`            | Throttle network requests with a random delay                                  |
| `pw-network-throttle-request-type`      | Throttle requests based on HTTP method (GET, POST, etc.)                       |
| `pw-page-on-console`                    | Listen for console events                                                      |
| `pw-page-on-request-mock`               | Intercept network requests                                                     |
| `pw-page-on-response`                   | Listen for response events                                                     |
| `pw-page-screenshot`                    | Take a screenshot of the page                                                  |
| `pw-pom`                                | Playwright Page Object Model (POM) class template                              |
| `pw-record-har`                         | Record HAR file                                                                |
| `pw-route-abort`                        | Abort a network request                                                        |
| `pw-runtime-annotations`                | Add runtime annotations                                                        |
| `pw-set-cookie`                         | Set a cookie in the browser context                                            |
| `pw-set-describe-default`               | Set test describe as default                                                   |
| `pw-set-describe-parallel`              | Set test describe as parallel                                                  |
| `pw-set-describe-retries`               | Set test describe retries                                                      |
| `pw-set-describe-serial`                | Set test describe as serial                                                    |
| `pw-set-describe-timeout`               | Set test describe timeout                                                      |
| `pw-set-test-skip`                      | Set test as skip                                                               |
| `pw-set-test-slow`                      | Set test as slow                                                               |
| `pw-set-tests-slow`                     | Set all test as slow                                                           |
| `pw-step`                               | Basic test step                                                                |
| `pw-test`                               | Basic test                                                                     |
| `pw-test-annotations`                   | Basic test with annotations                                                    |
| `pw-test-tag`                           | Basic test with tag                                                            |
| `pw-test-tags`                          | Basic test with tags                                                           |
| `pw-test-use-locale-timezone`           | Set locale and timezone for a specific test                                    |
| `pw-test-use-network-slomo`             | Slow down Playwright operations                                                |
| `pw-test-use-testIdAttribute`           | Set the testIdAttribute for test                                               |
| `pw-test-use-viewport-hd-size`          | Set the viewport size for test                                                 |
| `pw-use-har`                            | Use HAR file                                                                   |
| `pw-wait-request`                       | Wait for a specific request                                                    |
| `pw-wait-response`                      | Wait for a specific response                                                   |
| `pw-wait-response-print-console`        | Print all response details to the console                                      |

# Contributing

This project is open source and we welcome contributions from the community. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Push your branch to your forked repository.
5. Open a pull request to merge your changes into the main repository.

Please ensure that your code follows our coding guidelines and includes appropriate tests. We appreciate your contributions and look forward to reviewing your pull requests!

# For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
