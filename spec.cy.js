






describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://joaovitorlopesvieira.github.io/EstudandoJSeHTML/')

    cy.get('#username').type('joaovitor');

    cy.get('#password').type('Jesussalva');

    cy.get('button').click();

  })
})