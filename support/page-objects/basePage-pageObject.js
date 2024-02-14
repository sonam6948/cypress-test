class BasePage {

  navigate(path){

      cy.fixture("config.json").then((data) =>{    //this is for reading the config.json file
      cy.visit(data.baseUrl + path)

      })
  }

      getPageTitle() {
          return cy.title();
      }

  }
  
export default BasePage;