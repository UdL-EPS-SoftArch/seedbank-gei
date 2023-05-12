Feature: List Donation
  In order to list all Donations
  As a propagator
  I want to list all Donations

  Scenario: List Donations as a Propagator
    Given I'm in the homepage
    And I log in as "propagator1" with password "password"
    When I'm logged in as user "propagator1"
    And I click the "Donations" menu
    And I click the "List" dropdown menu
    Then I'm in the Donations list
