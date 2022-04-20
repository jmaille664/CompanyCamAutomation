describe ("Create Project", () =>{
    it("logins a user successfully", ()=>{

      //go to login page
      cy.visit("https://app.companycam.com/users/sign_in");
      //go to email and enter email
      cy.get('input[name="user[email_address]"]').type("testcompany04@test.com");
      //go to password and enter email
      cy.get('input[name="user[password]"]').type("Welcome123!");
      //click on Remember Me
      cy.get('form').find('[for="user_remember_me"]').click()
      //click on Sign In 
      cy.get('input[name="commit"]').click()
    });

    it("Creates a new project", ()=>{
        //Click on New Project button
        cy.get('[class=ccb-blue]').click({multiple: true});
    });

    //Unsure why but it logs user out and need to log back in to get to the create new project page
    //Maybe I need to select keep user logged in when first logging in
    it("Logs user back in", ()=>{
        //go to email and enter email
      cy.get('input[name="user[email_address]"]').type("testcompany04@test.com");
      //go to password and enter email
      cy.get('input[name="user[password]"]').type("Welcome123!");
      //click on Sign In 
      cy.get('input[name="commit"]').click()
    });

    it("Enters a google address", ()=>{
        //Click on search google address or name and enter zip code
        cy.get(('input[name="project_address"]')).type("05401");
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