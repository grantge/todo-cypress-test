const todoTitle = 'buy a coffee';
const todoDescription = 'some a good coffee';
const todoDate = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();

describe('UI card testing', () => {
    it('create todos card', () => {
        cy.visit('localhost:4000')
        // find first input and type todoname
        cy.get('.todoName').type(todoTitle)
        // find second input and type descrpition
        cy.get('.descriptionName').type(todoDescription)
        // find the button
        cy.get('button').click()
        // find todo name
        cy.get('#todoName').should('have.text', todoTitle)
        // find todo description
        cy.get('#todoDescription').should("have.text", todoDescription)
        // find todo's date
        cy.get('#todoDate').should('have.text', todoDate)
    })
})