$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountPage.feature");
formatter.feature({
  "line": 2,
  "name": "Create account page test",
  "description": "As user I want to Test create account page.",
  "id": "create-account-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 6347549300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter email id \"papapig1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter Title \"mrs\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter First name  \"papapig\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter Last name   \"mummuypig\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter  Password \"papa_pig\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User select DateofBirth \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select MonthofBirth \"9\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select YearofBirth \"1997\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click checkBoxnewsletter",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click checkBoxSpecialOffers",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter AddressFirstname\"papapig\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enter AddressLastname \"mummypig\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter Address\"334 portland road\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter AddressCity\"pune\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select AddressState \"Alabama\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enter AddressZip/PostalCode  \"38000\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select AddressCountry \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter AddressMobile phone \"9898989890\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User senter Address alias for future reference \"334 portland LONDON\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User can see message\"MY ACCOUNT\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 119291300,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 4022278100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig1@gmail.com",
      "offset": 21
    }
  ],
  "location": "AccountCreation.userEnterEmailId(String)"
});
formatter.result({
  "duration": 86793800,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 73842600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mrs",
      "offset": 18
    }
  ],
  "location": "AccountCreation.userEnterTitle(String)"
});
formatter.result({
  "duration": 2922279000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig",
      "offset": 24
    }
  ],
  "location": "AccountCreation.userEnterFirstName(String)"
});
formatter.result({
  "duration": 88544600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mummuypig",
      "offset": 24
    }
  ],
  "location": "AccountCreation.userEnterLastName(String)"
});
formatter.result({
  "duration": 74501900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papa_pig",
      "offset": 22
    }
  ],
  "location": "AccountCreation.userEnterPassword(String)"
});
formatter.result({
  "duration": 71226700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "AccountCreation.userSelectDateofBirth(String)"
});
formatter.result({
  "duration": 86846000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 26
    }
  ],
  "location": "AccountCreation.userSelectMonthofBirth(String)"
});
formatter.result({
  "duration": 79223600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 25
    }
  ],
  "location": "AccountCreation.userSelectYearofBirth(String)"
});
formatter.result({
  "duration": 81746400,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickCheckBoxnewsletter()"
});
formatter.result({
  "duration": 101279900,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickCheckBoxSpecialOffers()"
});
formatter.result({
  "duration": 58003300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig",
      "offset": 28
    }
  ],
  "location": "AccountCreation.userEnterAddressFirstname(String)"
});
formatter.result({
  "duration": 72530700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mummypig",
      "offset": 28
    }
  ],
  "location": "AccountCreation.userEnterAddressLastname(String)"
});
formatter.result({
  "duration": 73110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "334 portland road",
      "offset": 19
    }
  ],
  "location": "AccountCreation.userEnterAddress(String)"
});
formatter.result({
  "duration": 79843800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pune",
      "offset": 23
    }
  ],
  "location": "AccountCreation.userEnterAddressCity(String)"
});
formatter.result({
  "duration": 68589300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alabama",
      "offset": 26
    }
  ],
  "location": "AccountCreation.userSelectAddressState(String)"
});
formatter.result({
  "duration": 74893800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "38000",
      "offset": 35
    }
  ],
  "location": "AccountCreation.userEnterAddressZipPostalCode(String)"
});
formatter.result({
  "duration": 74661600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 28
    }
  ],
  "location": "AccountCreation.userSelectAddressCountry(String)"
});
formatter.result({
  "duration": 43564400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9898989890",
      "offset": 32
    }
  ],
  "location": "AccountCreation.userEnterAddressMobilePhone(String)"
});
formatter.result({
  "duration": 76906400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "334 portland LONDON",
      "offset": 48
    }
  ],
  "location": "AccountCreation.userSenterAddressAliasForFutureReference(String)"
});
formatter.result({
  "duration": 88362300,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 4553024100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 21
    }
  ],
  "location": "AccountCreation.userCanSeeMessage(String)"
});
formatter.result({
  "duration": 32986600,
  "status": "passed"
});
formatter.after({
  "duration": 709417100,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 2,
  "name": "signIn page Test",
  "description": "As user I want to Test sign in page.",
  "id": "signin-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8086329000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that user should navigate to sign in page successfully",
  "description": "",
  "id": "signin-page-test;verify-that-user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User can see text \"AUTHENTICATION\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 12350278700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 19
    }
  ],
  "location": "SignIn.userCanSeeText(String)"
});
formatter.result({
  "duration": 40211200,
  "status": "passed"
});
formatter.after({
  "duration": 706277400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": ":Verify that user see error message with inValid redentials",
  "description": "",
  "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 18,
      "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 19,
      "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 20,
      "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 21,
      "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 22,
      "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11688631100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ":Verify that user see error message with inValid redentials",
  "description": "",
  "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 5873456100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterUsername(String)"
});
formatter.result({
  "duration": 53409100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterPassword(String)"
});
formatter.result({
  "duration": 67748300,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.userClickOnSignInButton()"
});
formatter.result({
  "duration": 5017971300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "SignIn.userCanSeeErrorMessage(String)"
});
formatter.result({
  "duration": 28805500,
  "status": "passed"
});
formatter.after({
  "duration": 713318400,
  "status": "passed"
});
formatter.before({
  "duration": 12130540100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ":Verify that user see error message with inValid redentials",
  "description": "",
  "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 14922376200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterUsername(String)"
});
formatter.result({
  "duration": 71225600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterPassword(String)"
});
formatter.result({
  "duration": 67046500,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.userClickOnSignInButton()"
});
formatter.result({
  "duration": 10159663500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    }
  ],
  "location": "SignIn.userCanSeeErrorMessage(String)"
});
formatter.result({
  "duration": 32224400,
  "status": "passed"
});
formatter.after({
  "duration": 742333500,
  "status": "passed"
});
formatter.before({
  "duration": 6108656500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ":Verify that user see error message with inValid redentials",
  "description": "",
  "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 4937252200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterUsername(String)"
});
formatter.result({
  "duration": 66496100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterPassword(String)"
});
formatter.result({
  "duration": 69435200,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.userClickOnSignInButton()"
});
formatter.result({
  "duration": 926750100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "SignIn.userCanSeeErrorMessage(String)"
});
formatter.result({
  "duration": 29871600,
  "status": "passed"
});
formatter.after({
  "duration": 677289900,
  "status": "passed"
});
formatter.before({
  "duration": 4771221900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ":Verify that user see error message with inValid redentials",
  "description": "",
  "id": "signin-page-test;:verify-that-user-see-error-message-with-invalid-redentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 2545448000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterUsername(String)"
});
formatter.result({
  "duration": 78198800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterPassword(String)"
});
formatter.result({
  "duration": 65136100,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.userClickOnSignInButton()"
});
formatter.result({
  "duration": 1273864700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "SignIn.userCanSeeErrorMessage(String)"
});
formatter.result({
  "duration": 26684800,
  "status": "passed"
});
formatter.after({
  "duration": 697239100,
  "status": "passed"
});
formatter.before({
  "duration": 5047382400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user should logIn successFully with valid credentials",
  "description": "",
  "id": "signin-page-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \"papapig@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enter password \"papa_pig\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User can see sinout link \"Sign out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 2044890700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterUsername(String)"
});
formatter.result({
  "duration": 85900700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papa_pig",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterPassword(String)"
});
formatter.result({
  "duration": 76525700,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.userClickOnSignInButton()"
});
formatter.result({
  "duration": 1902600500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign out",
      "offset": 26
    }
  ],
  "location": "SignIn.userCanSeeSinoutLink(String)"
});
formatter.result({
  "duration": 28548800,
  "status": "passed"
});
formatter.after({
  "duration": 702768300,
  "status": "passed"
});
formatter.before({
  "duration": 5121711200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify that user should logOut successFully",
  "description": "",
  "id": "signin-page-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User click on singin link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enter username \"papapig@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter password \"papa_pig\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on signout button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User can see signIn link \"Sign in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "location": "AccountCreation.userClickOnSinginLink()"
});
formatter.result({
  "duration": 3797578000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papapig@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterUsername(String)"
});
formatter.result({
  "duration": 87987000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "papa_pig",
      "offset": 21
    }
  ],
  "location": "SignIn.userEnterPassword(String)"
});
formatter.result({
  "duration": 76373400,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.userClickOnSignInButton()"
});
formatter.result({
  "duration": 2599468100,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.userClickOnSignoutButton()"
});
formatter.result({
  "duration": 3599084000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 26
    }
  ],
  "location": "SignIn.userCanSeeSignInLink(String)"
});
formatter.result({
  "duration": 32018300,
  "status": "passed"
});
formatter.after({
  "duration": 702239900,
  "status": "passed"
});
formatter.uri("WomenCategoryPage.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test.",
  "description": "As user I want to Test Women category page",
  "id": "women-category-page-test.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on \"\u003cproduct\u003e\" from product",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on \"\u003cqty\u003e\" from qty",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on \"\u003csize\u003e\" from size",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on \"\u003ccolour\u003e\" from colour",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see message\"Product successfully added to your shopping cart\"product added",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User close popup window",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 21,
      "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6483453000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on \"Blouse\" from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on \"2\" from qty",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on \"M\" from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on \"White\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see message\"Product successfully added to your shopping cart\"product added",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User close popup window",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnWomenTab()"
});
formatter.result({
  "duration": 6001963100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromProduct(String)"
});
formatter.result({
  "duration": 3384404500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromQty(String)"
});
formatter.result({
  "duration": 95043100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromSize(String)"
});
formatter.result({
  "duration": 90733000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromColour(String)"
});
formatter.result({
  "duration": 2575200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 50739300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategory.userCanSeeMessageProductAdded(String)"
});
formatter.result({
  "duration": 50047625600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClosePopupWindow()"
});
formatter.result({
  "duration": 58439300,
  "status": "passed"
});
formatter.after({
  "duration": 768497300,
  "status": "passed"
});
formatter.before({
  "duration": 7654779500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on \"Printed Dress\" from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on \"3\" from qty",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on \"L\" from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on \"Orange\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see message\"Product successfully added to your shopping cart\"product added",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User close popup window",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnWomenTab()"
});
formatter.result({
  "duration": 6835842900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromProduct(String)"
});
formatter.result({
  "duration": 1963230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromQty(String)"
});
formatter.result({
  "duration": 100344400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromSize(String)"
});
formatter.result({
  "duration": 89588400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromColour(String)"
});
formatter.result({
  "duration": 2454800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 52665700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategory.userCanSeeMessageProductAdded(String)"
});
formatter.result({
  "duration": 50041732100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClosePopupWindow()"
});
formatter.result({
  "duration": 76441600,
  "status": "passed"
});
formatter.after({
  "duration": 744850800,
  "status": "passed"
});
formatter.before({
  "duration": 6371611100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on \"Printed Chiffon Dress\" from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on \"4\" from qty",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on \"S\" from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on \"Green\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see message\"Product successfully added to your shopping cart\"product added",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User close popup window",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnWomenTab()"
});
formatter.result({
  "duration": 2392913100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromProduct(String)"
});
formatter.result({
  "duration": 3214599700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromQty(String)"
});
formatter.result({
  "duration": 95762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromSize(String)"
});
formatter.result({
  "duration": 42927300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromColour(String)"
});
formatter.result({
  "duration": 2519100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 55315500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategory.userCanSeeMessageProductAdded(String)"
});
formatter.result({
  "duration": 50037390100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClosePopupWindow()"
});
formatter.result({
  "duration": 43497500,
  "status": "passed"
});
formatter.after({
  "duration": 735984800,
  "status": "passed"
});
formatter.before({
  "duration": 6288855700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test.;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User should in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click on \"Printed Summer Dress with Price $28.98\" from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on \"2\" from qty",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on \"M\" from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on \"Blue\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see message\"Product successfully added to your shopping cart\"product added",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User close popup window",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreation.userShouldInHomePage()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnWomenTab()"
});
formatter.result({
  "duration": 3908668400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromProduct(String)"
});
formatter.result({
  "duration": 1545674900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromQty(String)"
});
formatter.result({
  "duration": 103637300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromSize(String)"
});
formatter.result({
  "duration": 86106000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 15
    }
  ],
  "location": "WomenCategory.userClickOnFromColour(String)"
});
formatter.result({
  "duration": 3474000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 52717300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategory.userCanSeeMessageProductAdded(String)"
});
formatter.result({
  "duration": 50035399400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategory.userClosePopupWindow()"
});
formatter.result({
  "duration": 60925000,
  "status": "passed"
});
formatter.after({
  "duration": 729443800,
  "status": "passed"
});
});