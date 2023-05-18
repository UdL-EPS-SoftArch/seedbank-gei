import { And, Then } from "cypress-cucumber-preprocessor/steps";

Then("I'm in take list page", () => {
  cy.visit("http://localhost:4200/take");
});

And("I click on the first item list", () => {
  cy.get(".card-text").first().click();
});

And("I click on the last item list", () => {
  cy.get(".card-text").last().click();
});

Then("The delete button exist", () => {
  cy.get("#deleteBtn").should("exist");
});

And("can click on delete", () => {
  cy.get("#deleteBtn").should("exist");
  cy.get("#deleteBtn").should("exist").click();
});

Then("I can see confirmation page", () => {
  cy.get("#deleteBtn").should("exist");
  cy.get("#listBtn").should("exist");
});

Then("I got redirected to take list", () => {
  cy.url().should("be.equals", "http://localhost:4200/take");
});

And("I cant find the Take menu", () => {
  cy.get(".nav-link").contains("Takes").should("not.exist");
});

And("I can only get back", () => {
  cy.get("#listBtn").should("exist");
  cy.get("#deleteBtn").should("not.exist");
  cy.get("#editBtn").should("not.exist");
});

And("I cancel confirmation", () => {
  cy.get("#listBtn").should("exist");
  cy.get("#listBtn").should("exist").click();
});

Then("I got redirected to current take", () => {
  cy.url().should("match", /http:\/\/localhost:4200\/take\/(\d+)/);
});
