@regression
Feature: signIn page Test
  As user I want to Test sign in page.

  Scenario: Verify that user should navigate to sign in page successfully
    Given    User should in home page
    When    User click on singin link
    Then    User can see text "AUTHENTICATION"

  Scenario Outline: :Verify that user see error message with inValid redentials
    Given  User should in home page
    When   User click on singin link
    And   User enter username "<username>"
    And   User enter password "<password>"
    And   User click on signIn button
    Then  User can see error message "<message>"
    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  Scenario:Verify that user should logIn successFully with valid credentials
    Given  User should in home page
    When   User click on singin link
    And   User enter username "papapig@gmail.com"
    And   User enter password "papa_pig"
    And   User click on signIn button
    Then  User can see sinout link "Sign out"

  Scenario: Verify that user should logOut successFully
    Given  User should in home page
    When   User click on singin link
    And   User enter username "papapig@gmail.com"
    And   User enter password "papa_pig"
    And   User click on signIn button
    And   User click on signout button
    Then  User can see signIn link "Sign in"