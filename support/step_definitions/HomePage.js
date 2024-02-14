const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");
///const {BasePage} = require("../page-objects/BasePage")
import BasePage from "../page-objects/basePage_pageObjects"
import HomePage from "../page-objects/homepage_pageObjects"

 //const url = "http://www.webdriveruniversity.com/";

/*
Before(() => {
    cy.log("Executing commands inside Homepage Steps");
}) */

const basePage = new BasePage();
const homePage = new HomePage();

Given(`I navigate to the webDriver University Homepage`, () => {
//basePage.navigate("")
homePage.navigateToHomePage()
basePage.getPageTitle()

})

When(`I click on the contact-us button`,() => {
     //cy.get("#contact-us").invoke("removeAttr", "target").click();
     //cy.clickAndOpenLink_InSameTab("#contact-us");   //it is a custom command created in commands.js to directly go to the target page in the same window without opening a new tab
     homePage.clickOnContactUsButton();
    })

When(`I click on the login button`,() => {
    //cy.get("#login-portal").invoke("removeAttr", "target").click();
    //cy.clickAndOpenLink_InSameTab("#login-portal");
    homePage.clickOnLoginButton();

})