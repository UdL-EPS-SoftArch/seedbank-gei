Feature: Create a request
  In order to use the app
  As a propagator
  I want to modify requests

  Scenario: Update a request with valid data
    Given I'm in the homepage logged in as a donor and I create a donation with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    When I go to donations page and click on the last donation
    And I click on edit
    And I clear each field and fill the form with
      | FIELD    | VALUE         |
      | amount   | 456           |
      | weight   | 456           |
      | location | Barcelona     |
    Then I am redirected to the donation details page
    And I should see the donation with
      | FIELD    | VALUE         |
      | amount   | 456           |
      | weight   | 456           |
      | location | Barcelona     |

  Scenario: Update a donation with invalid data
    Given I'm in the homepage logged in as a donor and I create a donation with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    When I go to donations page and click on the last donation
    And I click on edit
    And I clear each field and fill the form with and I don't submit
      | FIELD    | VALUE         |
      | amount   | abc           |
      | weight   | 456           |
      | location | Barcelona     |
    Then Submit button should be disabled


  Scenario: Edit a request when not logged in as the owner
    Given I'm in the homepage logged in as a donor
    When I go to donations page and click on the last donation
    Then I should not see the edit button
