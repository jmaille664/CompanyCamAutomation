require('dotenv').config()

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//empty object
let LOCAL_STORAGE = {};

//grab localStorage key value pair
Cypress.Commands.add('saveLocalStorage', ()=> {
    Object.keys(localStorage).forEach(key =>{
        LOCAL_STORAGE[key] = localStorage[key];
    });
});

//get every key from local storage in the DOM set item 
Cypress.Commands.add('restoreLocalStorage', ()=>{
    Object.keys(LOCAL_STORAGE).forEach(key => {
        localStorage.setItem(key, localStorage[key]);
    });
});

//get email/password from cypress.json
const email = Cypress.env('email');
const password= Cypress.env('password');

//Login command
Cypress.Commands.add('login', ()=>{
    //go to login page
    cy.visit("https://app.companycam.com/users/sign_in");
    //go to email and enter email
    cy.get('input[name="user[email_address]"]').type(email);
    //go to password and enter email
    cy.get('input[name="user[password]"]').type(password);
    //click on Sign In 
    cy.get('input[name="commit"]').click();
});

//Logout command
Cypress.Commands.add('logout', ()=>{
    cy.get('a[href*="/signout"]').click({force: true});
})
