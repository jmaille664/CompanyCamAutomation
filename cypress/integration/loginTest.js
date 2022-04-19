// // plugins/index.js required installing dotenv / nodejs
// require('dotenv').config()

// module.exports = (on, config) => {
//   // copy needed variables from process.env to config.env
//   config.env.username = process.env.USER
//   config.env.password = process.env.PASS

//   return config
// }

  describe ("Login", () =>{
      it("logins a user successfully", ()=>{

        // const username= Cypress.env.USER
        // const password= Cypress.env.PASS

        //go to login page
        cy.visit("https://app.companycam.com/users/sign_in");
        //go to email and enter email
        cy.get('input[name="user[email_address]"]').type("testcompany04@test.com");
        //go to password and enter email
        cy.get('input[name="user[password]"]').type("Welcome123!");
        //click on Sign In 
        cy.get('input[name="commit"]').click()
      });
  });

