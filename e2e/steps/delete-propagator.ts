import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Then('I see a confirmation message {string}', (message) => {
  cy.log(message)
});

And("I click the {string} item", (option) => {
  cy.visit('http://localhost:4200/users/user')
})

And("I'm not logged in as propagator {string}", (option) => {
    cy.get('.nav-link').contains('Login');
    cy.log("Logged out propagator")
}

And("The propagator is already selected"), () => {
    cy.visit('http://localhost:4200/users/user')
}

Then("I'm in the Users list", () => {
  cy.visit('http://localhost:4200/users')
}

Then("I'm in the delete confirmation page", () => {
  cy.visit('http://localhost:4200/users/propagator/delete')
}


