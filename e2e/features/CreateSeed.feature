Feature: Create a seed
  In order to use the app
  As an admin
  I want to create seeds

  Scenario: Create a new seed
    Given I'm in the homepage logged in as an admin
    When I click the seed dropdown
    And I click on create
    And I fill the form with
      | FIELD            | VALUE          |
      | scientificName   | Allium Cepa    |
      | commonName       | Onion, Cebolla |
    And I click the "Submit" button
    Then I am redirected to the seed details page

  Scenario: Create a new seed without a common name
    Given I'm in the homepage logged in as an admin
    When I click the seed dropdown
    And I click on create
    And I fill the form with 
      | FIELD            | VALUE          |
      | scientificName   | Allium Cepa    |
    And I click the "Submit" button
    Then I am redirected to the seed details page

  Scenario: Create a new seed without a scientific name
    Given I'm in the homepage logged in as an admin
    When I click the seed dropdown
    And I click on create
    And I fill the form with
      | FIELD            | VALUE          |
      | commonName       | Onion, Cebolla |
    Then Submit button should be disabled
    
  Scenario: Create a new seed with badly formatted field
    Given I'm in the homepage logged in as an admin
    When I click the seed dropdown
    And I click on create
    And I fill the form with
      | FIELD            | VALUE          |
      | scientificName   | 123            |
      | commonName       | 123            |
    Then Submit button should be disabled

  Scenario: Create a new seed without being an admin
    Given I'm in the homepage logged in as a propagator or a donor
    When I click the seed dropdown
    Then I should not see the seed create button