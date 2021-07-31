describe('Test Validation', () => {
    it('check first input', () => {
      cy.visit('localhost:4000')
      // find first input and type todoname
      cy.get('.todoName').type('buy a coffee')
      // find second input and type descrpition
      cy.get('.descriptionName').type('some a good coffee')
      // find the button
      cy.get('button').click()
    })
  })