import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When(/^I go to the create a new donation url$/, function () {
  cy.visit('http://localhost:4200/donations/create');
});

Then(/^I should be redirected to the homepage$/, function () {
  cy.url().should('be.equals', 'http://localhost:4200/');
});

When(/^I go to the edit a donation url$/, function () {
  cy.visit('http://localhost:4200/donations/1/edit');
});

Given(/^I log out$/, function () {
  cy.get('.nav-link').contains('Logout').click();
});

When(/^I go to the remove a donation url$/, function () {
  cy.visit('http://localhost:4200/donations/1/delete');
});
