import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given(/^I'm in the homepage logged in as a propagator$/, function () {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('propagator1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});
When(/^I click the requests dropdown$/, function () {
  cy.get('.nav-link').contains('Requests').click();
});
When(/^I click on create$/, function () {
  cy.get('.nav-link').contains('Create').click();
});
Then(/^I am redirected to the request details page$/, function () {
  cy.url().should('match', /\/requests\/\d+/);
});
