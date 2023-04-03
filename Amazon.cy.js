describe('Amazon Website Testing', () => {
    it('Locator', () => {
      cy.visit("https://www.amazon.in")
      //cy.get('select').select('Alexa Skills')
     // cy.get('select').select(0).should('Alexa Skills')
      cy.get("select[id='searchDropdownBox']").select(0)
     
    })
})
