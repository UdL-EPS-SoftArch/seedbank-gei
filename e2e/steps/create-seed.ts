import { DataTable } from '@cucumber/cucumber';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given(/^I'm in the homepage logged in as an admin$/, function () {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('admin1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});
When(/^I go to the seed list page$/, function () {
  cy.get('.nav-link').contains('Seed').click();
  cy.get('#listSeeds').click();
});
When(/^I click on add seed button$/, function () {
  cy.get('#createSeed').click();
});
Then(/^I am redirected to the seed details page$/, function () {
  cy.url().should('match', /\/seeds\/\d+/);
});
Then(/^Submit button should be disabled$/, function () {
  cy.get('button').contains('Submit').should('be.disabled');
});
Given(/^I'm in the homepage logged in as an user$/, function () {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('test').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
});
Then(/^I should not see the seed create button$/, function () {
  cy.get('#createSeed').should('not.exist');
});
When(/^I fill the form with$/, function (table: DataTable) {
  table.rows().forEach((pair: string[]) =>
    cy
      .get('#' + pair[0])
      .type(pair[1])
      .blur()
  );
});
When(/^I click the add common name button$/, function () {
  cy.get('#add-commonName').click();
});
