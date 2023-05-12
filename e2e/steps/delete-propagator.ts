import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('I see a confirmation message {string}', (message) => {
  cy.visit('http://localhost:4200/users');
  cy.contains('tr', 'propagator1').should('not.exist');
  cy.log(message);
  cy.visit('http://localhost:4200');
});

And("I click the {string} item", (option) => {
  //cy.get('button').contains(option).click();
  cy.visit('http://localhost:4200/users/propagator1');
});

And("I'm not logged in as propagator {string}", (option) => {
    cy.get('.nav-link').contains('Login');
    cy.log('Logged out' + option);
});

And("The propagator is already selected", () => {
    cy.visit('http://localhost:4200/users/propagator1');
});

Then("I'm in the Users list", () => {
  cy.visit('http://localhost:4200/users');
});

Then("I'm in the delete confirmation page", () => {
  cy.visit('http://localhost:4200/users/propagator1/delete');
});
