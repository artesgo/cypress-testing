import { Youtube } from "../pageObjects/Youtube"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('visits youtube', () => {
    Youtube.open();
    Youtube.search('asmr');
  })
})