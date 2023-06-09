import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given(/^I'm in the homepage logged in as a donor$/, function () {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('donor1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});
When(/^I click the donations dropdown$/, function () {
  cy.get('.nav-link').contains('Donations').click();
});
When(/^I click on create$/, function () {
  cy.get('#createDonation').click();
});
Then(/^I am redirected to the donation details page$/, function () {
  cy.url().should('match', /\/donations\/\d+/);
});
Then(/^Submit button should be disabled$/, function () {
  cy.get('button').contains('Submit').should('be.disabled');
});
Given(/^I'm in the homepage logged in as a propagator$/, function () {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('propagator1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});
Then(/^I should not see the donation create button$/, function () {
  cy.get('#createDonation').should('not.exist');
});
And(/^I'm in request list page$/, function () {
  cy.visit('http://localhost:4200/requests');
});
And(/^I click first request$/, function () {
  cy.get("#date").first().click();
});
Then(/^I should not see the donate button$/, function () {
  cy.wait(1000);
  cy.get('#donateBtn').should('not.exist');
});