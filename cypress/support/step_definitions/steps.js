import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})


Given("i access the login page", () => {
    cy.visit("https://secure.smrholding.com/api/io/login?returnUrl=%2Fapi%2Fio%2Faccount");
})

When("i fill all input filds", () => {
    cy.get('[placeholder="E-mail"]').type('amanda.silva@acct.global')
    cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('teste')
})

Given("i access the home page", () => {
    cy.visit("https://automationexercise.com");
})

When("i fill all input filds with incorrect words", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-password"]').type('testeeeee')
    cy.get('[data-qa="login-email"]').type('amanda.silva@acct.global')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
})
