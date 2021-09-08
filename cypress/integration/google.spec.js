/// <reference types="Cypress"/>

describe ('Google search page', function () {
    it ('Launch google search page', function() {
        cy.visit('https://www.google.com/', { retryOnNetworkFailure: true });
        cy.wait(3000)
        cy.get('.lnXdpd').should('be.visible')
    })
    it ('should pass the audits', function () {
        cy.lighthouse();
        cy.pa11y();
    })
    it("should verify the lighthouse performance & SEO scores with threshold", function () {
        cy.visit('https://www.google.com', { retryOnNetworkFailure: true })
        cy.lighthouse({
          performance: 35,
          accessibility: 80,
          seo: 70
        })
    })
})