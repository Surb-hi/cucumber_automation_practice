@sanity
Feature:Create account page test
  As user I want to Test create account page.

  Scenario:Verify that user should create account successfully
    Given   User should in home page
    When    User click on singin link
    And    User enter email id "papapig1@gmail.com"
    And    User click on create an account button
    And    User enter Title "mrs"
    And    User enter First name  "papapig"
    And    User enter Last name   "mummuypig"
    And    User enter  Password "papa_pig"
    And    User select DateofBirth "1"
    And    User select MonthofBirth "9"
    And    User select YearofBirth "1997"
    And    User click checkBoxnewsletter
    And    User click checkBoxSpecialOffers
    And    User enter AddressFirstname"papapig"
    And    User enter AddressLastname "mummypig"
    And    User enter Address"334 portland road"
    And    User enter AddressCity"pune"
    And    User select AddressState "Alabama"
    And    User enter AddressZip/PostalCode  "38000"
    And    User select AddressCountry "United States"
    And    User enter AddressMobile phone "9898989890"
    And    User senter Address alias for future reference "334 portland LONDON"
    And    User click on register button
    Then   User can see message"MY ACCOUNT"
