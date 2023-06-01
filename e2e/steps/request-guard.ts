import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
When(/^I go to the create a new request url$/, function () {
  cy.visit('http://localhost:4200/requests/create');
});
