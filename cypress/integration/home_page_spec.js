describe('Sign in / sign out cycle', () => {
    it('successfully loads', () => {
        cy.visit('/')
    })
    it('should sign in, show icon, pop menu, sign out, and return to App main',()=>{
        cy
        .visit('/')
        .get('button')
        .first()

        // Sign in Bob Smith
        .click()
        .get('[data-qa="App.StyledProfileIcon"]')
        .should('be.visible')

        // Pop profile menu
        .click()
        .get('[data-qa="App.StyledProfileIcon.ProfileMenu.StyledRelativeContainer.StyledMenu.StyledButton"]')
        .should('be.visible')

        // Click sign out button
        .click()
        .get('[data-qa="App.signed-out"]')
        .should('be.visible');
    })
})
