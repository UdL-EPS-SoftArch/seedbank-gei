import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then("I'm in the Donations list", () => {
  cy.visit('http://localhost:4200/donations');
  cy.url().should('include', 'http://localhost:4200/donations');
});


And("I click the {string} dropdown", (option) => {
  cy.visit('http://localhost:4200/donations');
});
