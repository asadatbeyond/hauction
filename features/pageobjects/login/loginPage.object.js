import {locators,generic} from '../../../index'


const {getById, getByValue, getByXpath, getByText} = locators

const pageObjects = { 
  'Sign in': getByXpath("//*[@data-testid='header-profile-button']"),
  'Profile': getByXpath("//*[@data-testid='header-profile-button']"),
  'Username': getById("okta-signin-username"),
  'Password': getById("okta-signin-password"),
  'Login': getById("okta-signin-submit"),
  'Sign out': getByXpath("//a[contains(@href,'logout') and text()='Sign out']"),
}
module.exports = class loginPage extends generic {
  constructor() {
    super(pageObjects)
  }
}