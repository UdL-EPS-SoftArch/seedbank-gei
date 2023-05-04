Feature: Get Take
  In order to get Take
  As a admin, propagator, donor and user
  I want to get a Take

  Scenario: Create a new Take when not logged in
    Given I'm in the homepage
    And I'm not logged in
    Then The "Take" menu is not present

  Scenario: Create a new Take when logged in as admin
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    And I click the "Take" menu
    And I click the "List" dropdown menu

  Scenario: Take menu is not present when logged in as user
    Given I'm in the homepage
    When I log in as "test" with password "password"
    And I'm logged in as user "test"
    Then The "Take" menu is not present