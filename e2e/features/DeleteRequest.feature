Feature: Delete a request
  In order to correct a mistake or cancel a request
  As a propagator
  I want to be able to delete a request

  Scenario: Delete a request
    # FIXME: Implement ferrana'ls steps
    Given I'm in the homepage logged in as a propagator and I create a request with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    When I click the requests dropdown
    And I click the list button
    And I click on the date of the first item
    And I click on the delete button
    And I click on the confirm button
    Then I am redirected to the request list page

  Scenario: Delete a request without being a propagator
    Given I'm in the homepage logged in as a propagator and I create a request with
      | FIELD    | VALUE         |
      | amount   | 123           |
      | weight   | 123           |
      | location | Lleida        |
    And I logout
    And I log in as "donor1" with password "password"
    When I click the requests dropdown
    And I click the list button
    Then I should not see the delete button
