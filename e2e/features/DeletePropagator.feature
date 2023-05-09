Feature: Delete Propagator
  In order to delete a Propagator
  As an admin, propagator
  I want to delete a propagator account

  Scenario: Delete existing propagator as admin
    Given I'm in the homepage
    And I'm logged in as "admin" with password "password"
    When I click the "Propagators" dropdown
    And I click the "Propagator" item
    And I click the Delete button
    Then I see a message "Propagator deleted"

  Scenario: Delete existing propagator as propagator
    Given I'm in the homepage
    And I'm logged in as "propagator" with password "password"
    When I click the "Propagators" dropdown
    And The propagator is already selected
    And I click the Delete button
    Then I see a message "Propagator deleted"
    And I'm not logged in as propagator "propagator"

  Scenario: Delete existing propagator not as admin or propagator
      Given I'm in the homepage
      And I'm logged in as "user" with password "password"
      When I click the "Propagators" dropdown
      And I can't click the Delete button
      Then I see a message "Admin or propagator privilege needed"
