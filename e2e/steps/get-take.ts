import { Then } from "@cucumber/cucumber";

Then("I'm in take list page for admin", () => {
    cy.get('.jumbotron').contains('Here you can find all takes');
})

Then("I'm in take list page for propagator and donor", () => {
    cy.get('.jumbotron').contains('Here you can find your takes');
})