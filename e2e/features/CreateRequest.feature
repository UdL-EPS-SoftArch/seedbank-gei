Feature: Create a request
  In order to use the app
  As a propagator
  I want to create requests

  Scenario: Create a new request
    Given I'm in the homepage logged in as a propagator
    When I click the requests dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I click the "Submit" button
    Then I am redirected to the request details page

    Scenario: Create a new request without an amount
      Given I'm in the homepage logged in as a propagator
      When I click the requests dropdown
      And I click on create
      And I fill the form with
        | FIELD    | VALUE         |
        | weight   | 123           |
        | location | Lleida        |
      Then Submit button should be disabled

  Scenario: Create a new request without a weight
    Given I'm in the homepage logged in as a propagator
    When I click the requests dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | location | Lleida        |
    Then Submit button should be disabled

  Scenario: Create a new request without a location
    Given I'm in the homepage logged in as a propagator
    When I click the requests dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
    Then Submit button should be disabled

  Scenario: Create a new request with badly formatted field
    Given I'm in the homepage logged in as a propagator
    When I click the requests dropdown
    And I click on create
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | abc           |
      | weight   | 123           |
      | location | Lleida        |
    Then Submit button should be disabled

  Scenario: Create a new request without being a propagator
    Given I'm in the homepage logged in as a donor
    When I click the requests dropdown
    Then I should not see the create button
