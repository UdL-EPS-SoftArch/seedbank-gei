import {And, Then} from "cypress-cucumber-preprocessor/steps";

And("I click the {string} dropdown menu", (option) => {
  cy.get('.nav-item.dropdown.show').find('.dropdown-item').contains(option).click();
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

//  Steps for add take fro propagator,donor,admin

Then("I'm in donations take list page", () => {
  cy.visit("http://localhost:4200/donations");
});

And("I click on the first element list", () => {
  cy.get("tr").first().click();
  cy.url().should("match", /http:\/\/localhost:4200\/donations\/(\d+)/);
});
And("I check if add take button exists", () => {
  cy.get("#addTakeBtn").should("exist");
});

And("I check if add take button not exists", () => {
  cy.get("#addTakeBtn").should("not.exist");
});

Then("I click the button",()=>{
  cy.get("#addTakeBtn").should("exist");
  cy.get("#addTakeBtn").click();
  cy.url().should("be.equals", "http://localhost:4200/take/add");
})
Then("I check if were autofilled",()=>{
  cy.get("#amount").should('not.have.value', '');
  cy.get("#weight").should('not.have.value', '');
  cy.get("#location").should('not.have.value', '');
})
