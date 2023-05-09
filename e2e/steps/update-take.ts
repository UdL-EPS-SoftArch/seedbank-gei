import {And, Then} from "cypress-cucumber-preprocessor/steps";

Then("I'm in take details page", () => {
    cy.visit('http://localhost:4200/take/1');
  })