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


// This does not work due to iframe issues
// describe('test email field', function () {
//     it('makes an assertion', function () {
//         cy.visit('localhost:8000')
//         cy.get('#sign-in-email')
//           .type('fake@email.com')
//           .should('have.value', 'fake@email.com')
//     })
// })

// failed method from mightyiam
// describe('test email field', function () {
//     it('makes an assertion', function () {
//         cy.visit('localhost:8000')
//         cy.get('iframe')
//           .iframeLoaded()
//           .its('document')
//           .getInDocument('button')
//           // .trigger('click')
//          // .type('fake@email.com')
//          // .should('have.value', 'fake@email.com')
//     })
// })

// maiis method
// describe('test iframe', function () {
//     it('makes an assertion', function () {
//         cy.visit('localhost:8000')
//         cy.get('#source-base-login')
//           .then(function ($iframe) {
//             // const $body = $iframe.contents().find('body')
//
//             // console.log($body);
//
//           cy
//             .wrap($iframe)
//             .find('input[name="email"]')
//             .type('4242')
//             .type('4242')
//             .type('4242')
//             .type('4242')
//         })
//     })
// })

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
          // login.find('input[name="email"]').eq(0).click().type('4242424242424242')
        })
    })
})
