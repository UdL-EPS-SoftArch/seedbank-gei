import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the user detail page', () => {
  cy.visit('http://localhost:4200/users/userpropagator');
});

Then('I changed tis user role to {string}', (role) => {
  cy.get('#userRole')
    .invoke('text')
    .should('contains', role);
});
