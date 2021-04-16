/// <reference types="cypress" />

describe('challenge', ()=> {
    it('Clicar em Stat', () => {
        //visita o site do desafio 2 parte 2
        cy.visit('https://the-internet.herokuapp.com/challenging_dom');

        //clica nos 3 botões em sequencia, utilizando o seletor pelo nome da classe Button, Button Alert e Button Success
        cy.get('*[class^="button"]').first().click();
        cy.get('*[class^="button alert"]').click();
        cy.get('*[class^="button success"]').click();

        //clica nos 10 edits da tela em sequencia
        cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(5) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(6) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(7) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(8) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(9) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(10) > :nth-child(7) > [href="#edit"]').click();
        
        //clica nos 10 deletes da tela em sequencia
        cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(4) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(5) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(6) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(7) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(8) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(9) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(10) > :nth-child(7) > [href="#delete"]').click();

    });
});