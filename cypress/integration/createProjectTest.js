describe ("Create Project", () =>{
    
    before (()=> {
        //login beore the test starts
        cy.login();
      })
  
      beforeEach(()=> {
        //added for login cookies
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
      })

    it("Creates a new project", ()=>{
        //Click on New Project button
        cy.get('[class=ccb-blue]').click({multiple: true});
    });

    it("Enters a google address", ()=>{
        //Click on search google address or name and enter zip code
        cy.get(('input[name="project_address"]')).type("05401").click({force: true});
        //find the pac-matched class and click on the first item 
        cy.contains('span[class="pac-matched"]', '05401').click()
    });

    it("Enters project address to create a project", ()=>{
        //Enter Project Address 1
        cy.get('input[name="street_address_1"]').type("60 Battery St");
        //Click on submit button
        // cy.get('form').submit();
        cy.xpath('//*[@id="main"]/div[3]/div/div/div[2]/div/form').submit();
    })

    
});