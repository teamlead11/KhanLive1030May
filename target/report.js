$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/math/Counting.feature");
formatter.feature({
  "name": "To test the course couting",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "To verify the course title description",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to early math page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_early_math_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to addition subtration course",
  "keyword": "When "
});
formatter.match({
  "location": "EarlyMathSteps.the_user_navigates_to_addition_subtration_course()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigtes to intro to addition page",
  "keyword": "And "
});
formatter.match({
  "location": "CcEearlyMathAddSubBasics.the_user_navigtes_to_intro_to_addition_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the description in about section",
  "rows": [
    {
      "cells": [
        "Learn what it means to add. The examples used are 1+1 and 2+3. Created by Sal Khan."
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CcEearlyMathAddSubBasics.the_user_should_see_the_description_in_about_section(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});