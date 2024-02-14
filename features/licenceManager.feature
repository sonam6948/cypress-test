
Feature: Smart Home On Demand Licence Manager View


Scenario Outline: login page with different data
Given I navigate to the webDriver University Homepage
When I click on the login button
And I type the username "<userName>" and password "<password>"
And I click on login button
Then User should get '<expectedMessage>'

Examples:

|userName|password|expectedMessage|
|webdriver|webdriver123|validation succeeded|
|webdriver|lastName2|validation failed|