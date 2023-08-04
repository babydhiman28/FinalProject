/// <reference types="Cypress" />

describe('Register & Login Functionality', function () 
{
    it('LoginTest-FirstCase', function()
    { 
    //1. Login functionality
    cy.visit('https://automationteststore.com/')
    cy.contains('Login or register').click()
    cy.get('[title="Continue"]').click()
    cy.get('[name="firstname"]').type('Arshpreet')
    cy.get('[name="lastname"]').type('kaur')
    cy.get('[id="AccountFrm_email"]').type('admin0123456780@gmail.com')
    cy.get('[id="AccountFrm_address_1"]').type('5656, Avenue Park')
    cy.get('[name="city"]').type('Montreal')
    cy.get('[id="AccountFrm_zone_id"]').select('Surrey')
    cy.get('[id="AccountFrm_postcode"]').type('H3N5G6')
    cy.get('[id="AccountFrm_country_id"]').select('United Kingdom')
    cy.get('[name="loginname"]').type('admin0123456780')
    cy.get('[id="AccountFrm_password"]').type('admin123')
    cy.get('[id="AccountFrm_confirm"]').type('admin123') 
    cy.get('[id="AccountFrm_newsletter1"]').check({force:true})
    cy.get('[id="AccountFrm_agree"]').check({force:true})
    cy.get('[title="Continue"]').click()

    cy.get('#categorymenu > nav> ul>li:nth-child(3)> a').click()

  //(b) Verify that user lands on specific category page
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=product/category&path=36')
   
   // 2. Viewing specific product
  cy.get(':nth-child(6) > :nth-child(1) > img').click()
  cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
  
  // (b) Verify that on the page, correct title of the product is shown
  cy.get('.productname').should('contain', 'Lancome Hypnose Doll Lashes Mascara 4-Piece Gift Set')
  
  
  // 3. Increase the QTY to 6 and click on the Add to cart button.

  cy.get('[name="quantity"]').clear()
  cy.get('[name="quantity"]').type("6")
  cy.get('.productpagecart >li > a').click()

  // (b) Verifying with through assertion
  cy.get('.heading1').should('contain', ' Shopping Cart')
  cy.get('[id="cart_checkout1"]').click()
  
  // 4. Verify that you landed on the correct page, title “Checkout Confirmation”
  cy.get('.heading1').should('contain', ' Checkout Confirmation')
  cy.get('[id="checkout_btn"]').click()

  // (b) Verify that this message is shown after clicking “Your Order has been processed!”
  cy.get('.heading1').should('contain', ' Your Order Has Been Processed!')

  // (c) Click on the continue button
  cy.get('.contentpanel > section > a').click()
  })
})