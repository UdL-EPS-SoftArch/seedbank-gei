Feature: Get Take
  In order to get Take
  As a admin, propagator, donor and user
  I want to get a Take

  Scenario: Get Take when not logged in
    Given I'm in the homepage
    And I'm not logged in
    Then The "Take" menu is not present

  Scenario: Take menu is not present when logged in as user
    Given I'm in the homepage
    When I log in as "test" with password "password"
    And I'm logged in as user "test"
    Then The "Take" menu is not present

  Scenario: Get Take when logged in as admin
    Given I'm in the homepage
    And I log in as "admin1" with password "password"
    When I'm logged in as user "admin1"
    And I click the "Take" menu
    And I click the "List" dropdown menu
    Then I'm in take list page for admin

  Scenario: Get Take when logged in as propagator
    Given I'm in the homepage
    And I log in as "propagator1" with password "password"
    When I'm logged in as user "propagator1"
    And I click the "Take" menu
    And I click the "List" dropdown menu
    Then I'm in take list page for propagator and donor

  Scenario: Get Take when logged in as donor
    Given I'm in the homepage
    And I log in as "donor1" with password "password"
    When I'm logged in as user "donor1"
    And I click the "Take" menu
    And I click the "List" dropdown menu
    Then I'm in take list page for propagator and donor
