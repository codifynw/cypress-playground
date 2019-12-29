describe('my first test', function () {
    it('does not do much', function () {
        expect(true).to.equal(true)
    })
})

describe('my second test', function () {
    it('visit localhost', function () {
        cy.visit('localhost:8000')
    })
})

describe('get in the iframe', function () {
    it('visit localhost', function () {
        cy.visit('localhost:8000')


        cy.wait(5000)
        cy.get('#source-base-login').then($element => {

          const $body = $element.contents().find('body')

          let login = cy.wrap($body)
          login.find('#sign-in-email').click().type(Cypress.env('user'))
          login = cy.wrap($body)
          login.find('#sign-in-password').click().type(Cypress.env('password'))
          login = cy.wrap($body)
          login.find('.terms-accept-wrap').click()
          login = cy.wrap($body)
          login.find('.gs-credentials-submit-btn').click()
        })
    })
})
