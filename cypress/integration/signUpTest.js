describe("Visit CompanyCam website and signup", () => {
  it("complete sign up registration", () => {
    //visit CompanyCam website
    cy.visit("https://companycam.com/");
    //Click on Signup button
    cy.get(".global-nav-button").click();
    //type into Company name form field
    cy.get('input[name="companyName"]').type("test company02");
    //type into work email form field
    cy.get('input[name="email"]').type("testcompany04@test.com");
    //type into work email form field
    cy.get('input[name="password"]').type("Welcome123!");
    //find the label for the svg viewbox, find the dvg and click on it. Had to install cypress-xpath npm
    cy.xpath("/html/body/div/div[2]/div/div[2]/div/form/div[5]/label")
      .find("svg")
      .click();
    //click on create Company button
    cy.get("button").click();
    //enter first name
    cy.get('input[name="firstName"]').type("Stephanie");
    //enter last name
    cy.get('input[name="lastName"]').type("Richardson");
    //enter phone number
    cy.get('input[name="phoneNumber"]').type("18009999999");
    //click on the how did you hear about us drop down and select the first option and verify value=Podcast
    cy.get("select").select(1).should("have.value", "Podcast");
    //Enter text within "Which one? (optional"
    cy.get('input[name="howHeardDetail"]').type("Contractors Playbook");
    //Click on the start using company cam button
    cy.get("button").click();
    // //enter team member 1 email
    // cy.get('input[name="email-input-0"]').type("teammember01@test.com");
    //  //enter team member 2 email
    //  cy.get('input[name="email-input-1"]').type("teammember01@test.com");
    //  //click on invite team members
     cy.get('a[href*="/signup/onboard/done"]').click();
     //click on Create Project
     cy.get('a[href*="/projects/new"]').click( { multiple: true });
  });
});
