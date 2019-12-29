// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//
// Cypress.Commands.add(
//   'iframeLoaded',
//   { prevSubject: 'element' },
//   ($iframe) => {
//     const contentWindow = $iframe.prop('contentWindow')
//     return new Promise(resolve => {
//       if (
//         contentWindow &&
//         contentWindow.document.readyState === 'complete'
//       ) {
//         resolve(contentWindow)
//       } else {
//         $iframe.on('load', () => {
//           resolve(contentWindow)
//         })
//       }
//     })
//   })
//
// Cypress.Commands.add(
//   'getInDocument',
//   { prevSubject: 'document' },
//   (document, selector) => Cypress.$(selector, document)
// )



// Cypress.Commands.add("getIframeElement", (selector, name) => {
//     cy.get(selector)
//         .then($iframe => {
//             const $doc = $iframe.contents();
//             return cy.wrap($doc[0].body);
//         })
//         .find(name)
//         .first()
//  });


// export function runInEditor(callback: () => void) {
//   return cy
//     .log(‘runInEditor’)
//     .get(`#${EDITOR_CONTAINER_ID} > iframe`, { log: false })
//     .should(iframe => expect(iframe.contents().find(‘ef-app-root’)).to.exist)
//     .then(iframe => cy.wrap(iframe.contents().find(‘ef-app-root’), { log: false }))
//     .within({ log: false }, callback);
// }
