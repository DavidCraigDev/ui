/// <reference types="cypress" />

const selector = "[data-testId='integer-input']"

describe('integer-input', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('starts with a value of zero', () => {
    cy.get(selector).should('have.value', '0')
  })

  it('has a value of 1 if we type 1', () => {
    cy.get(selector).shadow().find('input').type('1')
    cy.get(selector).should('have.value', '1')
  })

  it('has a value of 15 if we type 1.5', () => {
    cy.get(selector).shadow().find('input').type('1.5')
    cy.get(selector).should('have.value', '15')
  })

  it('does not accept not integer input values', () => {
    cy.get(selector).shadow().find('input').type('1.+e3')
    cy.get(selector).should('have.value', '13')
  })
})
