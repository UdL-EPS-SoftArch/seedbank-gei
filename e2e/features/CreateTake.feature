Feature: Create Take
  In order to create Take
  As a admin, propagator, donor and user
  I want to create a new Take

  Scenario: Create a new Take when not logged in
    Given I'm in the homepage
    And I'm not logged in
    Then The "Take" menu is not present
