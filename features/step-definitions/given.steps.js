const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I go to homepage$/, async () => {
    await browser.url(`/`)
});