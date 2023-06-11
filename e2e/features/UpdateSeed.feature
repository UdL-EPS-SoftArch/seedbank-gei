Feature: Update a seed
  In order to update a seed
  As a admin
  I want to modify seeds

  Scenario: Update a seed with valid data
    Given I'm in the homepage logged in as an admin
    When I go to seeds page and click on the last seed
    And I click on edit
    And I clear each of the fields and fill the form with
      | FIELD          | VALUE       |
      | scientificName | Allium cepa |
      | commonName     | Onion       |
    And I click the add common name button
    And I click the "Submit" button
    Then I am redirected to the seed details page
    And I should see the seed with
      | FIELD          | VALUE       |
      | scientificName | Allium cepa |
      | commonName     | Onion       |

  Scenario: Update a seed with invalid data
    Given I'm in the homepage logged in as an admin and I create a seed with
      | FIELD            | VALUE         |
      | scientificName   | Allium cepa   |
      | commonName       | Onion         |
    And I click the add common name button
    When I go to seeds page and click on the last seed
    And I click on edit
    And I clear each field and fill the form with and I don't submit
      | FIELD            | VALUE  |
      | scientificName   | 123    |
      | commonName       | Garlic |
    Then Submit button should be disabled


  Scenario: Edit a seed when not logged in as an admin
    Given I'm in the homepage logged in as an user
    When I go to seeds page and click on the last seed
    Then I should not see the edit button
