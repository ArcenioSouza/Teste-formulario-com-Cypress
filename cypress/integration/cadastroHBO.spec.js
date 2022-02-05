/// <reference types="cypress"/>

before(() => {
   cy.visit("https://www.hbomax.com/subscribe?origin=paywallPurchase&sessionId=456b39cc-2c67-4b77-c4b5-85ae007f3e41&returnPath=%2Fpage%2Furn%3Ahbo%3Apage%3Ahome")
})

describe('Teste cadastro HBOMax', () => {

   describe('Aceitar cookie', () => {
      it('click botão aceitar', () => {
         cy.get('#onetrust-accept-btn-handler').click()
      })
   })

   describe('Informar plano', () => {
      it('click botão quero esse plano', () => {
         cy.get(':nth-child(1) > .ce__PlanPickerScreen__planButtonContainerClassName > #planSelected').click()
      })
   })

   describe('Preencher formulário', () => {
      it('digita primeiro e segundo nome', () => {
         cy.get('#firstName').type('Testando')
         cy.get('#lastName').type('cadastroHBO')
      })
   
      it('digita email', () => {
         cy.get('#email').type('teste@hbo.com.br')
      })
   
      it('digita senha', () => {
         cy.get('#password').type('teste-1senha')
      })
   })

   describe('Finalizar cadastro', () => {
      it('clica em criar conta', () => {
         cy.get('#createAccount').click()
      })
   })   
})
