

  describe ("Login", () =>{

    before (()=> {
      cy.login();
    })

    beforeEach(()=> {

      Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    })
      it("logins a user successfully", ()=>{

        // //go to login page
        // cy.visit("https://app.companycam.com/users/sign_in");
        // //go to email and enter email
        // cy.get('input[name="user[email_address]"]').type(username);
        // //go to password and enter email
        // cy.get('input[name="user[password]"]').type("Welcome123!");
        // //click on Sign In 
        // cy.get('input[name="commit"]').click()
      });

      it("logs a user out", ()=>{
        cy.get('a[href*="/signout"]').click({force: true});
      })
  });

