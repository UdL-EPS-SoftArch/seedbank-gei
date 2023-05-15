import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given(/^I'm in the homepage$/, function () {
  cy.visit('http://localhost:4200');
});

When(/^I log in as "admin1" with password "password"$/, function () {
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('admin1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});

When(/^I log in as "user1" with password "password"$/, function () {
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('user1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});

When(/^I go to the seeds list page$/, function () {
  cy.get('.nav-link').contains('Seeds').click();
  cy.get('#listSeeds').click();
});

Then(/^I'm in the seeds list$/, function () {
  cy.url().contains('/seeds');
});
