$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/math/Class5.feature");
formatter.feature({
  "name": "To test class 5 math courses",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "To verify the course list under class 5 math",
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
  "name": "The user is in class5 math course",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_class_math_course(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to shapes and angles",
  "keyword": "When "
});
formatter.match({
  "location": "FifthGradeMathSteps.the_user_navigates_to_shapes_and_angles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the list of videos",
  "rows": [
    {
      "cells": [
        "Angle measurement \u0026 circle arcs",
        "Acute, right, \u0026 obtuse angles",
        "Measuring angles in degrees",
        "Recognizing angles",
        "Identifying an angle",
        "Measuring angles using a protractor",
        "Measuring angles using a protractor 2"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShapesAndAnglesSteps.the_user_should_see_the_list_of_videos(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the list parctice courses",
  "rows": [
    {
      "cells": [
        "Angle types",
        "Recognize angles",
        "Draw right, acute, and obtuse angles",
        "Benchmark angles",
        "Measure angles"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ShapesAndAnglesSteps.the_user_should_see_the_list_parctice_courses(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});