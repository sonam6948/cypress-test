import BasePage from "./basePage_pageObjects";

class LoginPage extends BasePage {  
elements = {
    usernameLocator : () =>  cy.get("#text"),
    passwordLocator :() => cy.get("#password"),
    loginButtonLocator :() => cy.get("#login-button")
   // headerText : () =>  cy.xpath("//h1 | //body")
}
//loginButtonLocator = "#login-button"

  navigateToLoginPage()
    {
        super.navigate("/Login-Portal/index.html");
    }
  inputUsername(userName){
     //cy.get("#text").type(userName);
     this.elements.usernameLocator().type(userName)
}

   inputPassword(password){
    this.elements.passwordLocator().type(password)
}

   clickOnLoginButtonOnLoginPage(){
        //cy.get("#login-button").click();
        this.elements.loginButtonLocator().click();
 }


}

export default  LoginPage;