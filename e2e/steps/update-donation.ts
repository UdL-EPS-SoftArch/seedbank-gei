import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given(/^I'm in the homepage logged in as a donor and I create a donation with$/, function (table: DataTable) {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('donor1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
  cy.get('.nav-link').contains('Donations').click();
  cy.get('#createDonation').click();
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur());
  cy.get('button').contains('Submit').click();
});
When(/^I go to donations page and click on the last donation$/, function () {
  cy.get('.nav-link').contains('Donations').click();
  cy.get('#listDonations').click();
  cy.get('.table').last().click();
});
When(/^I click on edit$/, function () {
  cy.get('#editBtn').click()
});
When(/^I clear each field and fill the form with$/, function (table: DataTable) {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur());
  cy.get('button').contains('Submit').click();
});
Then(/^I should see the donation with$/, function (table: DataTable) {
  cy.get('#amount').should('contain', table.rows()[0][1]);
  cy.get('#weight').should('contain', table.rows()[1][1]);
  cy.get('#location').should('contain', table.rows()[2][1]);
});
When(/^I clear each field and fill the form with and I don't submit$/, function (table: DataTable) {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur());
});
Then(/^I should not see the edit button$/, function () {
  cy.get('#editBtn').should('not.exist');
});
