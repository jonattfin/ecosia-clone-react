const basePage = 'http://localhost:3000'

export function openPage(page) {
  cy.visit(`${basePage}${page}`)
}

export function isPage(page) {
  cy.url(`${basePage}${page}`)
}
