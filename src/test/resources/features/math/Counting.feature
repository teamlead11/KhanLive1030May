#Author: your.email@your.domain.com
@tag
Feature: To test the course couting

  @tag1
  Scenario: To verify the course title description
    Given The user is in Early math course
    When The user navigates to addition subtration course
    Then The user should see the description in about section
      | Learn what it means to add. The examples used are 1+1 and 2+3. Created by Sal Khan. |
