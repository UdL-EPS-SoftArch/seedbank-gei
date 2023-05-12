Feature: Create a donation
  In order to use the app
  As a donor
  I want to create donations

  Scenario: Create a new donation
    Given I'm in the homepage logged in as a donor
    When I click the donations dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I click the "Submit" button
    Then I am redirected to the donation details page

  Scenario: Create a new donation without an amount
    Given I'm in the homepage logged in as a donor
    When I click the donations dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | weight   | 123           |
      | location | Lleida        |
    Then Submit button should be disabled

  Scenario: Create a new donation without a weight
    Given I'm in the homepage logged in as a donor
    When I click the donations dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | location | Lleida        |
    Then Submit button should be disabled

  Scenario: Create a new donation without a location
    Given I'm in the homepage logged in as a donor
    When I click the donations dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
    Then Submit button should be disabled

  Scenario: Create a new donation with badly formatted field
    Given I'm in the homepage logged in as a donor
    When I click the donations dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | abc           |
      | weight   | 123           |
      | location | Lleida        |
    Then Submit button should be disabled

  Scenario: Create a new request without being a donor
    Given I'm in the homepage logged in as a propagator
    When I click the donations dropdown
    Then I should not see the create button
