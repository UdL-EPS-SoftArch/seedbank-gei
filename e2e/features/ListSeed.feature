Feature: List Seeds
  In order to list all seeds
  As a admin, user, propagator or donor
  I want to list all seeds

Scenario: List seeds as a Admin
    Given I'm in the homepage
    And I log in as "admin1" with password "password"
    When I'm logged in as user "admin1"
    And I click the "Seeds" menu
    And I click the "List" dropdown
    Then I'm in the seeds list

Scenario: List seeds as a User
    Given I'm in the homepage
    And I log in as "user1" with password "password"
    When I'm logged in as user "user1"
    And I click the "Seeds" menu
    And I click the "List" dropdown
    Then I'm in the seeds list

  Scenario: List seeds as a Propagator
    Given I'm in the homepage
    And I log in as "propagator1" with password "password"
    When I'm logged in as user "propagator1"
    And I click the "Donations" menu
    And I click the "List" dropdown
    Then I'm in the seeds list

  Scenario: List seeds as a Donor
    Given I'm in the homepage
    And I log in as "donor1" with password "password"
    When I'm logged in as user "donor1"
    And I click the "Seeds" menu
    And I click the "List" dropdown
    Then I'm in the seeds list