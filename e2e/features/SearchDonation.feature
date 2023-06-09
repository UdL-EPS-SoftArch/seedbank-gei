Feature: List Donation
  In order to search a specific Donation
  As a propagator
  I want to search a Donation

  Scenario: Search Donations as a Propagator
    Given I'm in the homepage
    And I log in as "propagator1" with password "password"
    When I'm logged in as user "propagator1"
    And I click the "Donations" menu
    And I search the Donation by location name "Barcelona"
    When I click the Donation hint
    Then I'm in the specific Donation

  Scenario: Search Donations as an Admin
    Given I'm in the homepage
    And I log in as "admin1" with password "password"
    When I'm logged in as user "admin1"
    And I click the "Donations" menu
    And I search the Donation by location name "Barcelona"
    When I click the Donation hint
    Then I'm in the specific Donation

  Scenario: Search Donations as a Donor
    Given I'm in the homepage
    And I log in as "donor1" with password "password"
    When I'm logged in as user "donor1"
    And I click the "Donations" menu
    And I search the Donation by location name "Barcelona"
    When I click the Donation hint
    Then I'm in the specific Donation

    Scenario: Search Donations but I'm a normal user
      Given I'm in the homepage
      And I log in as "test" with password "password"
      When I'm logged in as user "test"
      And I click the "Donations" menu
      Then I can't see the Donations searcher
