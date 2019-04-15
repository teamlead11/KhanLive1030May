$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/math/Math.feature");
formatter.feature({
  "name": "To verify courses under math",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "verify the course list",
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
  "name": "The user navigates to math page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_math_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the list of courses",
  "rows": [
    {
      "cells": [
        "Early math",
        "Kindergarten",
        "1st grade",
        "2nd grade",
        "3rd grade"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathSteps.the_user_should_see_the_list_of_courses(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});