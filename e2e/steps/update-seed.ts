import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given(
  /^I'm in the homepage logged in as an admin and I create a seed with$/,
  function (table: DataTable) {
    cy.visit('http://localhost:4200');
    cy.get('.nav-link').contains('Login').click();
    cy.get('#username').type('admin1').blur();
    cy.get('#password').type('password').blur();
    cy.get('button').contains('Submit').click();
    cy.get('.nav-link').contains('Seeds').click();
    cy.get('#listSeeds').click();
    cy.get('#createSeed').click();
    table.rows().forEach((pair: string[]) =>
      cy
        .get('#' + pair[0])
        .type(pair[1])
        .blur()
    );
    cy.get('button').contains('Submit').click();
  }
);
When(/^I go to seeds page and click on the last seed$/, function () {
  cy.get('.nav-link').contains('Seeds').click();
  cy.get('#listSeeds').click();
  cy.get('.table').last().click();
});
When(/^I click on edit$/, function () {
  cy.get('#editBtn').click();
});
When(
  /^I clear each field and fill the form with$/,
  function (table: DataTable) {
    table.rows().forEach((pair: string[]) =>
      cy
        .get('#' + pair[0])
        .clear()
        .type(pair[1])
        .blur()
    );
    cy.get('button').contains('Submit').click();
  }
);
Then(/^I should see the seed with$/, function (table: DataTable) {
  cy.get('#scientificName').should('contain', table.rows()[0][1]);
  cy.get('#commonName').should('contain', table.rows()[1][1]);
});
When(
  /^I clear each field and fill the form with and I don't submit$/,
  function (table: DataTable) {
    table.rows().forEach((pair: string[]) =>
      cy
        .get('#' + pair[0])
        .clear()
        .type(pair[1])
        .blur()
    );
  }
);
Then(/^I should not see the edit button$/, function () {
  cy.get('#editBtn').should('not.exist');
});
