Feature: Delete a seed
  In order to delete a seed
  As an admin
  I want to be able to delete a seed

  Scenario: Delete a seed
    Given I'm in the homepage logged in as an admin and I create a seed with
      | FIELD            | VALUE          |
      | scientificName   | Allium Cepa    |
      | commonName       | Onion, Cebolla |
    When I click the seeds dropdown
    And I click the seed list button
    And I click on the first item
    And I click on the delete button
    And I click on the confirm button
    Then I am redirected to the seed list page

  Scenario: Delete a seed without being an admin
    Given I'm in the homepage logged in as an admin and I create a seed with
      | FIELD            | VALUE          |
      | scientificName   | Allium Cepa    |
      | commonName       | Onion, Cebolla |
    And I logout
    And I log in as "donor1" with password "password"
    When I click the seeds dropdown
    And I click the seed list button
    Then I should not see the delete seed button