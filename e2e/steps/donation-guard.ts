import {Given, Then, When} from "@cucumber/cucumber";

When(/^I go to the create a new donation url$/, function () {
  cy.visit('http://localhost:4200/donations/create');
});

Then(/^I should be redirected to the homepage$/, function () {
  cy.url().should('be.equals', 'http://localhost:4200/');
});

When(/^I go to the edit a donation url$/, function () {
  cy.visit('http://localhost:4200/donations/edit/1');
});
Given(/^There is a donation$/, function () {
});
