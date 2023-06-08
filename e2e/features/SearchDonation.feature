Feature: List Donation
  In order to search a specific Donation
  As a propagator
  I want to search a Donation

  Scenario: Search Donations as a Propagator
    Given I'm in the homepage
    And I log in as "propagator1" with password "password"
    When I'm logged in as user "propagator1"
    And I click the "Donations" menu
    And I search the Donation by location name "Lleida"
    When I click the Donation hint
    Then I'm in the specific Donation
