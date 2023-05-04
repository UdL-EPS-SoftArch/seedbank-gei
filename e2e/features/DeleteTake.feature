Feature: Delete Take
  Scenario: Create a new Take when logged in as admin
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    And I'm in take list page
    And I click on the first item list
    Then The delete button exist 
    And can click on delete
    Then I can see confirmation page
    Then The delete button exist 
    And can click on delete
    Then I got redirected to take list

