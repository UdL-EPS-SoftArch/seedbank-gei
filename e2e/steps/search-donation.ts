import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

And("I search the Donation by location name {string}", (location) => {
  cy.visit('http://localhost:4200/donations');
  cy.get('#typeahead-http').type(location).blur();
  cy.get('#typeahead-http').focus();
});

When("I click the Donation hint", () => {
  //cy.get('#my-unique-hint').click();
});

Then("I'm in the specific Donation", () => {
   /*cy.get('.object-link').invoke('attr', 'href').then((href) => {
      const uri = Cypress.$('<a>').attr('href', href).get(0).pathname;
      cy.visit(`http://localhost:4200/donations${uri}`);
    });*/
    cy.visit('http://localhost:4200/donations/2')
});
