// const { expect } = require("chai")
// const { assert } = require("chai")

describe('UI testing', () => {
    it('visit test website and test UI', () => {
        cy.visit('localhost:4000')
        // find title name
        cy.get('h1').should('have.text', 'Todo App')
        // find first field label name
        cy.get('.first-label').should("have.text", "Todo's name")
        // find second field label name
        cy.get('.second-label').should('have.text', "Description")
        // find button name
        cy.get('button.ui.button.btn').should('have.text', 'Submit')

       
    })
})