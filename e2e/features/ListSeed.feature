Feature: List Seeds
  In order to list all seeds
  As a admin, user, propagator or donor
  I want to list all seeds

Scenario: List seeds as a Admin
    Given I'm in the homepage
    And I log in as "admin1" with password "password"
    When I'm logged in as user "admin1"
    And I go to the seeds list page
    Then I'm in the seeds list

Scenario: List seeds as a User
    Given I'm in the homepage
    And I log in as "test" with password "password"
    When I'm logged in as user "test"
    And I go to the seeds list page
    Then I'm in the seeds list
