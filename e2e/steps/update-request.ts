import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from '@cucumber/cucumber';

Given(/^I'm in the homepage logged in as a propagator and I create a request with$/, function (table: DataTable) {
  cy.visit('http://localhost:4200');
  cy.get('.nav-link').contains('Login').click();
  cy.get('#username').type('propagator1').blur();
  cy.get('#password').type('password').blur();
  cy.get('button').contains('Submit').click();
  cy.get('.nav-link').contains('Requests').click();
  cy.get('#createRequest').click();
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur());
});
When(/^I go to requests page and click on the last request$/, function () {
  cy.get('.nav-link').contains('Requests').click();
  cy.get('.card-text').last().click();
});
When(/^I click on edit$/, function () {
  cy.get('#editBtn').click()
});
Then(/^I should see the request with$/, function (table: DataTable) {
  cy.get('td').eq(1).should('contain', table.rows()[0][1]);
  cy.get('td').eq(3).should('contain', table.rows()[1][1]);
  cy.get('td').eq(5).should('contain', table.rows()[2][1]);
});
Then(/^I should not see the edit button$/, function () {
  cy.get('#editBtn').should('not.exist');
});
