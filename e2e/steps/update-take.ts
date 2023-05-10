import {And, Then, When} from "cypress-cucumber-preprocessor/steps";
import {DataTable} from "@cucumber/cucumber";

Then("I'm in take details page", () => {
    cy.visit('http://localhost:4200/take/1');
  })

Then("I'm in take edit page", () => {
  cy.visit('http://localhost:4200/take/1/edit');
})

When('I replace the form with', (table: DataTable) => {
  // The original form values should be present before replacing them
  cy.get('input').first().should('not.have.value', '');
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().clear().clear().type(pair[1]).blur() );
});
