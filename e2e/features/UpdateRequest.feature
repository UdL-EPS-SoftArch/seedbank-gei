Feature: Create a request
  In order to use the app
  As a propagator
  I want to modify requests

  Scenario: Update a request with valid data
    Given I'm in the homepage logged in as a propagator and I create a request with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    When I go to requests page and click on the last request
    And I click on edit
    And I fill the form with
      | FIELD    | VALUE         |
      | amount   | 456           |
      | weight   | 456           |
      | location | Barcelona     |
    Then I am redirected to the request details page
    And I should see the request with
      | FIELD    | VALUE         |
      | amount   | 456           |
      | weight   | 456           |
      | location | Barcelona     |

