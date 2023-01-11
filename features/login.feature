Feature: Login

  Scenario Outline: As a user, I can login and logout successfully
  Given I go to homepage
  When I click on "Sign in"
  And I enter "<Username>" in "Username" field
  And I enter "<Password>" in "Password" field
  And I click on "Login"
  Examples:
    | Username           | Password       |
    | Yearly User        | password       |
