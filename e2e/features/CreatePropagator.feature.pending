Feature: Create a Propagator User
  In order to use the app
  As a user with role propagator
  I want to register myself and get an account and assign it to a propagator role

  Scenario: Register new user
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE                   |
      | username | userpropagator          |
      | email    | userpropagator@demo.app |
      | password | password                |
    And I click the "Submit" button
    Then I'm logged in as user "userpropagator"

  Scenario: Login as a user
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Login" menu
    And I fill the form with
      | FIELD    | VALUE                   |
      | username | userpropagator          |
      | password | password                |
    And I click the "Submit" button
    Then I'm logged in as user "userpropagator"

    Scenario: Add role propagator
      Given I'm in the home page
      And I'm not logged in
      When I click the "Login" menu
      And I fill the form with
        | FIELD    | VALUE                   |
        | username | userpropagator          |
        | password | password                |
      And I click the "Submit" button
      When I click the "Edit" button
      And I fill the form with
        | FIELD    | VALUE                   |
        | username | userpropagator          |
        | role     | propagator              |
        | e-mail   | userpropagator@demo.app |
      And I click the "Submit" button
      Then I changed this user role to "propagator"
