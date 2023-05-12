import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

When(/^I click the donation list button$/, function () {
  cy.get('#listDonations').click();
});
When(/^I click on the first item$/, function () {
  cy.get('.table').first().click();
});
When(/^I click on the donation delete button$/, function () {
  cy.get('button').contains('Delete').click();
});
When(/^I click on the confirm button$/, function () {
  cy.get('button').contains('Delete').click();
});
Then(/^I am redirected to the donation list page$/, function () {
  cy.url().should('match', /\/donations/);
});
Then(/^I should not see the donation delete button$/, function () {
  cy.get('button').contains('Delete').should('not.exist');
});
