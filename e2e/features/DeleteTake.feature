Feature: Delete Take
  Scenario: Delete a new Take when logged in as admin
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
  Scenario: I try to delete a new Take when logged in as user
    Given I'm in the homepage
    And I log in as "test" with password "password"
    Then I'm logged in as user "test"
    And I cant find the Take menu

