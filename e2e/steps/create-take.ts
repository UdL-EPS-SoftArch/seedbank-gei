import {And, Then} from "cypress-cucumber-preprocessor/steps";

And("I click the {string} dropdown menu", (option) => {
  cy.get('.dropdown-item').contains(option).click();
})

Then("I'm in take list page", () => {
  cy.visit('http://localhost:4200/take');
})

Then("I'm in add take page", () => {
  cy.visit('http://localhost:4200/take/add');
})

Then("The {string} button is present", (option) => {
  cy.get('.jumbotron').contains(option)
    .should('exist');
})

Then('The {string} button is not present', (option) => {
  cy.get('.jumbotron').contains(option)
    .should('not.exist');
});
