Feature: Guard a request
  In order to have a good UX
  As a user
  I want to be able to only perform actions that make sense

  Scenario: Go to create a new request url without being a propagator
    Given I'm in the homepage logged in as a donor
    When I go to the create a new request url
    Then I should be redirected to the homepage

  Scenario: Go to edit a request url without being a donor
    Given I'm in the homepage logged in as a propagator and I create a request with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I log out
    And I'm in the homepage logged in as a donor
    When I go to the edit a request url
    Then I should be redirected to the homepage

  Scenario: Go to edit a request url without being a donor
    Given I'm in the homepage logged in as a propagator and I create a request with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I log out
    And I'm in the homepage logged in as a donor
    When I go to the remove a request url
    Then I should be redirected to the homepage
