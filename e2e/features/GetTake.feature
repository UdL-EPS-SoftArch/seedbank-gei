Feature: Get Take
  In order to get Take
  As a admin, propagator, donor and user
  I want to get a Take

    Scenario: Create a new Take when not logged in
    Given I'm in the homepage
    And I'm not logged in
    Then The "Take" menu is not present
