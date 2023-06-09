Feature: Create a seed
  In order to use the app
  As an admin
  I want to create seeds

  Scenario: Create a new seed
    Given I'm in the homepage logged in as an admin
    When I go to the seed list page
    And I click on add seed button
    And I fill the form with
      | FIELD            | VALUE          |
      | scientificName   | Allium Cepa    |
      | commonName       | Onion |
    And I click the add common name button
    And I fill the form with
      | FIELD            | VALUE          |
      | commonName       | Cebolla |
    And I click the add common name button
    And I click the "Submit" button
    Then I am redirected to the seed details page

  Scenario: Create a new seed without a common name
    Given I'm in the homepage logged in as an admin
    When I go to the seed list page
    And I click on add seed button
    And I fill the form with
      | FIELD          | VALUE          |
      | scientificName | Allium sativum |
    And I click the "Submit" button
    Then I am redirected to the seed details page

  Scenario: Create a new seed without a scientific name
    Given I'm in the homepage logged in as an admin
    When I go to the seed list page
    And I click on add seed button
    And I fill the form with
      | FIELD            | VALUE          |
      | commonName       | Onion, Cebolla |
    Then Submit button should be disabled

#  TODO: form validation not implemented yet
#  Scenario: Create a new seed with invalid data
#    Given I'm in the homepage logged in as an admin
#    When I go to the seed list page
#    And I click on add seed button
#    And I fill the form with
#      | FIELD            | VALUE          |
#      | scientificName   | 123            |
#      | commonName       | 123            |
#    Then Submit button should be disabled

  Scenario: Create a new seed without being an admin
    Given I'm in the homepage logged in as an user
    When I go to the seed list page
    Then I should not see the seed create button
