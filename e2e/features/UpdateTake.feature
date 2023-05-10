Feature: Update Take
  In order to update Take
  As a admin, propagator, donor
  I want to udpate a Take

  Scenario: Edit Take button is not present when logged in as a donor
    Given I'm in the homepage
    And I log in as "donor" with password "password"
    Then I'm logged in as user "donor"
    When I'm in take details page
    Then The "Edit" button is not present

  Scenario: Edit Take button is present when logged in as a admin
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    When I'm in take details page
    Then The "Edit" button is present

  Scenario: Edit Take button is present when logged in as a propagator
    Given I'm in the homepage
    And I log in as "propagator" with password "password"
    Then I'm logged in as user "propagator"
    When I'm in take details page
    Then The "Edit" button is present

  Scenario: Update Take when logged in as a propagator
    Given I'm in the homepage
    And I log in as "propagator" with password "password"
    Then I'm logged in as user "propagator"
    And I'm in take edit page
    And I replace the form with
      | FIELD    | VALUE   |
      | amount   |  120   |
      | location | Madrid  |
      | weight   |  100    |
    When I click the "Submit" button
    Then The "Edit" button is not present

  Scenario: Update Take when logged in as a admintest
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    And I'm in take edit page
    And I replace the form with
      | FIELD    | VALUE   |
      | amount   |  310   |
      | location | Sevilla  |
      | weight   |  100    |
    When I click the "Submit" button
    Then The "Edit" button is not present

  Scenario: Update Take when logged in as a admintest
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    And I'm in take edit page
    And I replace the form with
      | FIELD    | VALUE   |
      | amount   |  310   |
      | location | Sevilla  |
      | weight   |  100    |
    When I click the "Submit" button
    Then The "Edit" button is not present
