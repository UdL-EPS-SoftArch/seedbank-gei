import {And, Then} from "cypress-cucumber-preprocessor/steps";

And("I click the {string} dropdown menu", (option) => {
  cy.get('.dropdown-item').contains(option).click();
})

Then("I'm in take list page", () => {
  cy.visit('http://localhost:4200/take');
})

Then("{string} button is present", (option) => {
  cy.get('.add-take').contains(option)
    .should('exist');
})
