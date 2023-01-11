const { Given, When, Then } = require('@wdio/cucumber-framework');

import getPageObject from '../pageobjects/getObjects'

When('I click on {string}', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
})

When('I wait for {string} to be displayed', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
})

When('I select the {string} tab', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
})

When('I scroll down', async function (){
  await browser.execute('mobile: scroll', { 'direction': 'down'});
})
