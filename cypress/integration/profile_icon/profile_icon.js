import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('I open the app', () => {
    cy
        .visit('/')
});
And('I click sign-in', () => {
    // Sign in Bob Smith by pressing the first button
    cy.get('button')
        .first()
        .click()
        .get('[data-qa="App.StyledProfileIcon"]')
        .should('be.visible')
});
And('I click the profile icon', () => {
    cy.get('[data-qa="App.StyledProfileIcon"]')
        .click()
        .get('[data-qa="App.StyledProfileIcon.ProfileMenu.StyledRelativeContainer.StyledMenu.StyledButton"]')
        .should('be.visible')
});
Then('it displays the user profile',()=>{
        cy
            .get('[data-qa="App.StyledProfileIcon.ProfileMenu.StyledRelativeContainer.StyledMenu.StyledButton"]')
            .should('be.visible')
});
When('I click the sign-out button', () => {
    cy.get('[data-qa="App.StyledProfileIcon.ProfileMenu.StyledRelativeContainer.StyledMenu.StyledButton"]')
        .click();
});
Then('"signed out" should be visible', () => {
    cy.get('[data-qa="App.signed-out"]')
        .should('be.visible');
});
