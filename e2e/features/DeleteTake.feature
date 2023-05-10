Feature: Delete Take

  Scenario: I Delete a new Take when logged in as admin
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

  Scenario: I Delete a Take when logged in as admin but I decide not to delete
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    And I'm in take list page
    And I click on the first item list
    Then The delete button exist 
    And can click on delete
    Then I can see confirmation page
    Then The delete button exist 
    And I cancel confirmation
    Then I got redirected to current take

  Scenario: I Delete a new Take when logged in as propagator
    Given I'm in the homepage
    And I log in as "propagator" with password "password"
    Then I'm logged in as user "propagator"
    And I'm in take list page
    And I click on the first item list
    Then The delete button exist 
    And can click on delete
    Then I can see confirmation page
    Then The delete button exist 
    And can click on delete
    Then I got redirected to take list

  Scenario: I try to delete a new Take when logged in as user but i cant acces to take list
    Given I'm in the homepage
    And I log in as "test" with password "password"
    Then I'm logged in as user "test"
    And I cant find the Take menu

  Scenario: I try to delete a new Take when logged in as donor but
    Given I'm in the homepage
    And I log in as "donor" with password "password"
    Then I'm logged in as user "donor"
    And I'm in take list page
    And I click on the first item list
    And I can only get back
