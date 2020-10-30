/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe('project', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.findByLabelText(/view project "food"/i)
      .click({ force: true })
      .waitForRouteChange()
  })

  it('should be linked from the index page', () => {
    cy.assertRoute('/food')
  })
  it('should have a category, title, description', () => {
    cy.findByText(/photography/i)
    cy.findAllByText(/Food/i)
    cy.findByText(/Delicious food./i)
  })
  it('should have images', () => {
    cy.findByAltText(/food/i)
  })
  it('should have a contact button', () => {
    cy.findByText(/contact us/i)
  })
})
