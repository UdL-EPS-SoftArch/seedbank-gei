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
