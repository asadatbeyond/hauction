import {locators,generic} from '../../../index'


const {getByXpath} = locators

const pageObjects = {
  'games': getByXpath('//div[contains(@label,\'Games\')]'),
}

module.exports =  class gamesPage extends generic {
  constructor() {
    super(pageObjects)
  }
}
