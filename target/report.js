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
        "Test",
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.khanacademy.stepdefinition.MathSteps.the_user_should_see_the_list_of_courses(MathSteps.java:32)\r\n\tat ✽.The user should see the list of courses(src/test/resources/features/math/Math.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});