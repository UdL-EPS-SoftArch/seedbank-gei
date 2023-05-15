Feature: Update Seed
  In order to update Seed
  As a admin, propagator, donor and user
  I want to udpate a Seed

  Scenario: Edit Seed button is present when logged in as a admin
    Given I'm in the homepage
    And I log in as "admin1" with password "password"
    Then I'm logged in as user "admin1"
    When I'm in Seed details page
    Then The "Edit" button is present

  Scenario: Edit Seed button is not present when logged in as a donor
    Given I'm in the homepage
    And I log in as "donor1" with password "password"
    Then I'm logged in as user "donor1"
    When I'm in Seed details page
    Then The "Edit" button is not present

  Scenario: Edit Seed button is not present when logged in as a propagator
    Given I'm in the homepage
    And I log in as "propagator1" with password "password"
    Then I'm logged in as user "propagator1"
    When I'm in Seed details page
    Then The "Edit" button is not present

  Scenario: Edit Seed button is not present when logged in as a donor
    Given I'm in the homepage
    And I log in as "donor1" with password "password"
    Then I'm logged in as user "donor1"
    When I'm in Seed details page
    Then The "Edit" button is not present

  Scenario: Edit Seed button is not present when logged in as a user
    Given I'm in the homepage
    And I log in as "user1" with password "password"
    Then I'm logged in as user "user1"
    When I'm in Seed details page
    Then The "Edit" button is not present

  Scenario: Update Seed when logged in as a admin
    Given I'm in the homepage
    And I log in as "admin1" with password "password"
    Then I'm logged in as user "admin1"
    And I'm in Seed edit page
    And I replace the form with
      | FIELD          | VALUE         |
      | scientificName | Allium cepa   |
      | commonName     | Onion,Cebolla |
    When I click the "Submit" button
