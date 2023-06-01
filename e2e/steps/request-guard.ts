import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
When(/^I go to the create a new request url$/, function () {
  cy.visit('http://localhost:4200/requests/create');
});
When(/^I go to the edit a request url$/, function () {
  cy.visit('http://localhost:4200/requests/1/edit');
});

When(/^I go to the remove a request url$/, function () {
  cy.visit('http://localhost:4200/requests/1/delete');
});
