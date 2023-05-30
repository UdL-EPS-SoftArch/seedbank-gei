import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from '@cucumber/cucumber';

When(/^I click the list button$/, function () {
  cy.get('#listRequests').click();
});
When(/^I click on the date of the first item$/, function () {
  cy.get('.card-text').first().click();
});
When(/^I click on the delete button$/, function () {
  cy.get('button').contains('Delete').click();
});
When(/^I click on the confirm button$/, function () {
  cy.get('button').contains('Delete').click();
});
Then(/^I am redirected to the request list page$/, function () {
  cy.url().should('match', /\/requests/);
});
Then(/^I should not see the delete button$/, function () {
  cy.get('button').contains('Delete').should('not.exist');
});
