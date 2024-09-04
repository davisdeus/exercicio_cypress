/// <reference types='cypress' />

describe('Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Davi');
        cy.get('input[type="tel"]').type('64991245789');
        cy.get('input[type="email"]').type('davi89@gmail.com');
        cy.contains('Adicionar').click();
        cy.screenshot('teste');
    })
    it('Deve alterar um contato existente', () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('input[type="text"]').clear().type('Diego silva');
        cy.get('input[type="tel"]').clear().type('63991234568');
        cy.get('input[type="email"]').clear().type('joao@gmail.com');
        cy.get('button[type="submit"]').click();
        cy.get('.alterar');
        cy.screenshot('editar');
    });

    it("Deve remover um contato da lista", () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
        cy.screenshot("teste-remover");
    });
})
