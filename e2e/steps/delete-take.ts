import {And, Then} from "cypress-cucumber-preprocessor/steps";

And("I click the {string} dropdown menu", (option) => {
  cy.get('.dropdown-item').contains(option).click();
})

Then("I'm in take list page", () => {
  cy.visit('http://localhost:4200/take');
  //cy.get('.card-block').click();
})

And('I click on the first item list', ()=>{
  cy.get('.card-text').first().click()
});
Then('The delete button exist', ()=>{
  cy.get('#deleteBtn').should('exist');
});
And('can click on delete', ()=>{
  cy.get('#deleteBtn').should('exist');
  cy.get('#deleteBtn').should('exist').click();
});
Then('I can see confirmation page', ()=>{
  //cy.get('#deleteBtn').should('exist');
});
Then('I got redirected to take list',()=>{
  cy.url().should("be.equals", 'http://localhost:4200/take')
})
And('I cant find the Take menu', () => {
  cy.get('.nav-link').contains('Takes').should('not.exist');

});
