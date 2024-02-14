import BasePage from "./basePage_pageObjects";
class HomePage extends BasePage{   // we extend HomePage to use the methods of BasePage

    navigateToHomePage(){
        super.navigate("")  //super is used to call the parents class's method
}

    clickOnContactUsButton(){
    cy.clickAndOpenLink_InSameTab("#contact-us"); 
}

    clickOnLoginButton(){
        cy.clickAndOpenLink_InSameTab("#login-portal");
    }


}

export default  HomePage;