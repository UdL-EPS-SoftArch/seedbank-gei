import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

And("I search the Donation by location name {string}", (location) => {
  cy.visit('http://localhost:4200/donations');
  cy.get('#typeahead-http').type(location).blur();
});

When("I click the Donation hint", () => {
  cy.wait(2000)
  cy.get('ngb-typeahead-17').click();
});

Then("I'm in the specific Donation", () => {
   cy.get('.object-link').invoke('attr', 'href').then((href) => {
      const uri = Cypress.$('<a>').attr('href', href).get(0).pathname;
      cy.visit(`http://localhost:4200/donations${uri}`);
    });
});
