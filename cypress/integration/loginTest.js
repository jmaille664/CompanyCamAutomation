// // plugins/index.js required installing dotenv / nodejs
 require('dotenv').config()

  // const username= process.env.USER
  // console.log(username);
  // console.log(process.env)
  // const password= process.env.PASS

// module.exports = (on, config) => {
//   // copy needed variables from process.env to config.env
//   config.env.username = process.env.USER
//   config.env.password = process.env.PASS

//   return config
// }

  describe ("Login", () =>{
      it("logins a user successfully", ()=>{

        // const username= process.env.USER
        // const password= process.env.PASS

        //go to login page
        cy.visit("https://app.companycam.com/users/sign_in");
        //go to email and enter email
        cy.get('input[name="user[email_address]"]').type(username);
        //go to password and enter email
        cy.get('input[name="user[password]"]').type("Welcome123!");
        //click on Sign In 
        cy.get('input[name="commit"]').click()
      });
  });

