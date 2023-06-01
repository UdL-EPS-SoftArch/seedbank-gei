Feature: Guard a donation
  In order to have a good UX
  As a user
  I want to be able to only perform actions that make sense

  Scenario: Go to create a new donation url without being a donor
    Given I'm in the homepage logged in as a propagator
    When I go to the create a new donation url
    Then I should be redirected to the homepage

  Scenario: Go to edit a donation url without being a donor
    Given I'm in the homepage logged in as a donor and I create a donation with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I log out
    And I'm in the homepage logged in as a propagator
    When I go to the edit a donation url
    Then I should be redirected to the homepage

  Scenario: Go to remove a donation url without being a donor
    Given I'm in the homepage logged in as a donor and I create a donation with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I log out
    And I'm in the homepage logged in as a propagator
    When I go to the remove a donation url
    Then I should be redirected to the homepage
