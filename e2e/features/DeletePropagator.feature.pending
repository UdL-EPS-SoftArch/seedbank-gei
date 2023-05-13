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
    When I click on the confirm button
    Then I see a confirmation message "Propagator deleted"

  Scenario: Delete existing propagator not as admin or propagator
    Given I'm in the homepage
    And I log in as "test" with password "password"
    When I'm logged in as user "test"
    And I click the "Users" menu
    And I click the "List" dropdown menu
    Then I'm in the Users list
    When I click the "propagator1" item
    Then I should not see the delete button
