// quotes.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("MVP Tests", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })


    // Getters!
    
    const first_nameInput = () => cy.get("input[name=first_name]");
    const last_nameInput = () => cy.get("input[name=last_name]");
    const passwordInput = () => cy.get('input[name=password]');
    const emailInput = () => cy.get("input[name=email]");
    const serviceInput = () => cy.get("input[name=service]");
    const submitBtn = () => cy.get("button[id='submit']");

    // Basic test
    it("basic test to see if works", () => {
        expect(1+1).to.equal(2);
    }) 

    //Try and type in "name" (both first and last) and check if value === what we type in
    it("Types in name input", () => {
        first_nameInput().should("have.value", '').type("Bob").should('have.value', "Bob");
        last_nameInput().should("have.value", '').type("The Farmer").should('have.value', "The Farmer");
    })

    // Type in email and password
    it("Allows input for email and password", () => {
        emailInput().should("have.value", '').type("bobthefarmer@gmail.com").should("have.value", "bobthefarmer@gmail.com");
        passwordInput().should("have.value", "").type("12345").should("have.value", "12345");
    })

    // Can we check terms of service box??
    it("Allows terms of service box to be checked", () => {
        serviceInput().click();
    })

    // Check to see if user can submit full form
    it("Allows form submission", () => {
        first_nameInput().type("Abe");
        last_nameInput().type("Lincoln");
        emailInput().type("email@whatisthat.com");
        passwordInput().type("honestyISbest");
        serviceInput().click();
        submitBtn().click();
    })

    // Check to see if form will not be submitted if one or more field is non-valid
    it("Prevents invalid submissions", () => {
        first_nameInput().type("Bob");
        last_nameInput().type("Ross");
        // NO ".com" making it invalid
        emailInput().type("happy@accidents");
        passwordInput().type("PaintingWOO");
        serviceInput().click();
        submitBtn().click();
    })

    
})