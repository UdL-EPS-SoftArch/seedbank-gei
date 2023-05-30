Feature: Delete a seed
  In order to delete a seed
  As an admin
  I want to be able to delete a seed

  Scenario: Delete a seed
    Given I'm in the homepage logged in as an admin
    When I go to the seed list page
    And I click on the first seed
    And I click on the delete button
    And I click on the confirm button
    Then I am redirected to the seeds list page

  Scenario: Delete a seed without being an admin
    Given I'm in the homepage logged in as an user
    When I go to the seed list page
    And I click on the first seed
    Then I should not see the delete seed button
