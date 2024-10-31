export const search = (phrase) => {
    cy.get(`[aria-label='Search Submit Button']`).click();
    cy.get('.input-container').should('be.visible');
    cy.get('input[id="top-nav-search-input"]').type(phrase);
    cy.get(`[aria-label='Search Submit Button']`).click();
}
