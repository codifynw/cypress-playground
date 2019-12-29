describe('my first test', function () {
    it('does not do much', function () {
        expect(true).to.equal(true)
    })
})

describe('my second test', function () {
    it('visit the kitchen sink', function () {
        cy.visit('https://example.cypress.io')
    })
})

describe('my third test', function () {
    it('makes an assertion', function () {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url()
          .should('include', '/commands/actions')
    })
})

describe('test email field', function () {
    it('makes an assertion', function () {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})
