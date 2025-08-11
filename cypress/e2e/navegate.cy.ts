describe('Navegación para listar y detalle de producto', () => {
  it('buscar, entrar al detalle y volver a la categoría', () => {
    //Next recomienda que la ruta sea la siguiente
    cy.visit("http://localhost:3000/")

    // Buscamos un producto esperamos que aparezca en la lista
    cy.get('[data-testid="search-input"]', { timeout: 10000 }).should('be.visible').as('search');
    cy.get('@search').click().clear().type('heladera');
    cy.get('@search').should('have.value', 'heladera');
    cy.get('[data-testid="search-button"]').should('be.visible').as('btn');

    // Esperamos 2,5s y hacemos click en la búsqueda
    cy.wait(2500);
    cy.get('@btn').click();
    cy.url().should('include', '/items?search=heladera');

    // Esperamos 2s y hacemos click en la card
    cy.wait(2000);
    cy.get('[data-testid="container_cardMLA999000"]').click();

    // Esperamos 4s y validamos elementos principales del detalle como titulo, precio y botón
    cy.wait(4000);
    cy.get('[data-testid="info_title"]').should('be.visible');
    cy.get('[data-testid="info_price"]').should('be.visible');
    cy.get('[data-testid="info_button"]').should('be.visible');

    // volvemos a la lista de categorías y validamos precio de la lista
    cy.get('[data-testid="Heladeras"]').click();
    cy.wait(3000);
    cy.get('[data-testid="details_price"]').should('be.visible');
  })
})  