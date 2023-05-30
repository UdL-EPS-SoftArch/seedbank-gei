import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

When(/^I click the seeds list button$/, function () {
  cy.get('#listSeeds').click();
});
When(/^I click on the first seed$/, function () {
  cy.get('.card-block').first().click();
});
When(/^I click on the delete button$/, function () {
  cy.get('button').contains('Delete').click();
});
When(/^I click on the confirm button$/, function () {
  cy.get('button').contains('Delete').click();
});
Then(/^I am redirected to the seeds list page$/, function () {
  cy.url().should('match', /\/seeds/);
});
Then(/^I should not see the delete seed button$/, function () {
  cy.get('button').contains('Delete').should('not.exist');
});
