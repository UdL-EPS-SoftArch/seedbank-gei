import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

When(/^I click the requests dropdown$/, function () {
  cy.get('.nav-link').contains('Requests').click();
});
When(/^I click on create new request$/, function () {
  cy.get('#createRequest').click();
});
Then(/^I am redirected to the request details page$/, function () {
  cy.url().should('match', /\/requests\/\d+/);
});
Then(/^Submit button should be disabled$/, function () {
  cy.get('button').contains('Submit').should('be.disabled');
});
Given(/^I'm in the homepage logged in as a donor$/, function () {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('donor1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});
Then(/^I should not see the create button$/, function () {
  cy.get('#createRequest').should('not.exist');
});
