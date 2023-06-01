Feature: Guard a donation
  In order to have a good UX
  As a user
  I want to be able to only perform actions that make sense

  Scenario: Go to create a new donation url without being a donor
    Given I'm in the homepage logged in as a propagator
    When I go to the create a new donation url
    Then I should be redirected to the homepage
