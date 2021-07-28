describe('UI testing', () => {
    it('visit test website and test UI', () => {
        cy.visit('localhost:4000')
        // find title name
        cy.get('h1').contains('Todo App')
        // find first field label name
        cy.get('label').contains("Todo's name")
        // find second field label name
        cy.get('label').contains("Description")
        // find button name
        cy.get('button').contains('Submit')
    })
})