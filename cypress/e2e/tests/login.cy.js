/// <reference types="cypress" /> 

describe ('Login', function(){
    it('Valid Login', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.title().should('include', "OrangeHRM");
        cy.url().should('include', 'orangehrmlive.com')  
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrmlive')


        cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Username']").should("have.value", "Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            
            cy.get("button[type='submit']").click()

            let expName = "Paul Collings";

            cy.get('.oxd-userdropdown-name').then( (x) => {
                  let actName =  x.text()
                  expect(actName).to.equal(expName)
            })
        
    })
})