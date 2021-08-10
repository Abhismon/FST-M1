$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity03.feature");
formatter.feature({
  "line": 2,
  "name": "Testing with Tags",
  "description": "",
  "id": "testing-with-tags",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity03"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Testing with Simple Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-simple-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SimpleAlert"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks the Simple Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Read the text from it \u0026 print it",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close Browser AlertTestSteps",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 7328542900,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openSimpleAlert()"
});
formatter.result({
  "duration": 140200400,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 7190800,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 5302900,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlert()"
});
formatter.result({
  "duration": 14479500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 485423400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Testing with Confirm Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-confirm-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@ConfirmAlert"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User clicks the Confirm Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Read the text from it \u0026 print it",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Close the alert with Cancel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Close Browser AlertTestSteps",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 4965504500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openConfirmAlert()"
});
formatter.result({
  "duration": 132574500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 6335600,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 5682300,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlertWithCAncel()"
});
formatter.result({
  "duration": 18195300,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 463158600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Testing with Prompt Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-prompt-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@PromptAlert"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User clicks the Prompt Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Read the text from it \u0026 print it",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Write a custom message in it",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Close Browser AlertTestSteps",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 5680874000,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openPromptAlert()"
});
formatter.result({
  "duration": 120191000,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 6214200,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 6662500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.writeToPrompt()"
});
formatter.result({
  "duration": 13547800,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlert()"
});
formatter.result({
  "duration": 14646200,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 253841800,
  "status": "passed"
});
});