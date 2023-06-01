Feature: Guard a request
  In order to have a good UX
  As a user
  I want to be able to only perform actions that make sense

  Scenario: Go to create a new request url without being a propagator
    Given I'm in the homepage logged in as a donor
    When I go to the create a new request url
    Then I should be redirected to the homepage
