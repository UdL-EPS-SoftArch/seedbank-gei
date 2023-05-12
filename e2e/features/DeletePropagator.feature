Feature: Delete Propagator
  In order to delete a Propagator
  As an admin, propagator
  I want to delete a propagator account

  Scenario: Delete existing propagator as admin
    Given I'm in the homepage
    And I log in as "admin1" with password "password"
    When I'm logged in as user "admin1"
    And I click the "Users" menu
    And I click the "List" dropdown menu
    Then I'm in the Users list
    And I click the "propagator1" item
    And I click the "Delete" button
    Then I'm in the delete confirmation page
    When I click the "Delete" button
    Then I see a confirmation message "Propagator deleted"

  Scenario: Delete existing propagator as propagator
    Given I'm in the homepage
    And I log in as "propagator1" with password "password"
    When I'm logged in as user "propagator1"
    And I click the "Users" menu
    And I click the "List" dropdown menu
    Then I'm in the Users list
    And The propagator is already selected
    And I click the "Delete" button
    Then I'm in the delete confirmation page
    When I click the "Delete" button
    Then I see a confirmation message "Propagator deleted"
    And I'm not logged in as propagator "propagator"

  Scenario: Delete existing propagator not as admin or propagator
    Given I'm in the homepage
    And I log in as "donor1" with password "password"
    When I'm logged in as user "donor1"
    And I click the "Users" menu
    And I click the "List" dropdown menu
    Then I'm in the Users list
    When I click the "propagator1" item
    Then The "Delete" button is not present
