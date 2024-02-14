const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from "../page-objects/loginPage_pageObjects"


const loginPage = new LoginPage();

let stub;

When(`I click on login button`,() => {
    stub = cy.stub(); //initialise the stub for handling the javascript validator
    cy.on('window:alert', stub) // handles the windows alerts and store them into stub
    //cy.get("#login-button").click();
    loginPage.clickOnLoginButtonOnLoginPage();
})

Then(`login successful`,() => {

    expect(stub).to.have.been.calledWith("validation succeeded")
})

Then(`login not successful`,() => {
    expect(stub).to.have.been.calledWith("validation failed")
})

When(`I type the username {string} and password {string}`,(userName,password ) => {
    cy.get("#text").type(userName);
    cy.get("#password").type(password);
})

Then(`User should get {string}`,(expectedMessage) => {
    expect(stub).to.have.been.calledWith(expectedMessage)

})