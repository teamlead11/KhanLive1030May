$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/science/Class9Physics.feature");
formatter.feature({
  "name": "To test class 9 physics course",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "To verify the course list under class9 Physics",
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
  "name": "The user navigates to class nine physics course",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.the_user_navigates_to_class_physics_course()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the list of courses in class nine physics",
  "rows": [
    {
      "cells": [
        "Motion",
        "Force \u0026 laws of motion",
        "Gravity",
        "Work \u0026 Energy",
        "Sound"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Class9PhysicsSteps.the_user_should_see_the_list_of_courses_in_class_physics(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});