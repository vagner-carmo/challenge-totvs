/// <reference types="cypress" />

describe('challenge', ()=> {
    it('Clicar em Stat', () => {
        //visita o site do desafio 2 parte 1
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');

        //clica no botão de start
        cy.get('button').click();
        
        //aguarda alguns segundos
        cy.wait(10000);

        //verifica se contem 'Hello World!' na tela
        cy.contains('Hello World!');
    });
});