Feature: Delete a donation
  In order to correct a mistake or cancel a donation
  As a donor
  I want to be able to delete a donation

  Scenario: Delete a donation
    Given I'm in the homepage logged in as a donor and I create a donation with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    When I click the donations dropdown
    And I click the list button
    And I click on the first item
    And I click on the delete button
    And I click on the confirm button
    Then I am redirected to the donation list page

  Scenario: Delete a request without being a propagator
    Given I'm in the homepage logged in as a donor and I create a donation with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I logout
    And I log in as "donor1" with password "password"
    When I click the donations dropdown
    And I click the list button
    Then I should not see the delete button
