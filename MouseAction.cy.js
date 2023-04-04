import 'cypress-iframe'
describe('Mouse Action ', function () {
   // test case
   it('1 MouseOver Action', function () {
      // launch URL
      cy.visit("https://demo.opencart.com/");
      // show hidden element with invoke
      // cy.get('#narbar-menu > ul > li:nth-child(1) > a').invoke('show');
      cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')
      //click hidden element
      cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click()
      cy.xpath('//*[@id="narbar-menu"]/ul/li[1]/div/div/ul/li[2]/a').should('be.visible')
   });

   it('2 RightClick Action(Contex Click)', function () {
      //    // launch URL
      cy.visit("https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html");
      //    // show hidden element with invoke
      //cy.xpath('/html/body/ul/li[3]/span').invoke('show');
      cy.xpath('//span[text()="Copy"]').should('not.be.visible')
      //    //click hidden element rightclick()also workable
      cy.get('body > div > section > div > div > div > p > span').trigger('contextmenu')
      cy.wait(5000)
       cy.xpath('//span[text()="Copy"]').click()
       cy.wait(5000)
      
       })

it('3 Double clickClick Action(Contex Click)', function () {
      //    // launch URL
      cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
      cy.frameLoaded('#iframeResult')
      
      cy.iframe('#iframeResult').find('/html/body/button').dblclick()

   });
});


