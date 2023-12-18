import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";

export class HomePage extends BasePage {
    private logo = By.className("logo img-responsive");
    private login_button = By.className('login');
    

    constructor(driver: WebDriver) {
        super(driver);
    }
    async navigateToHomePage() {
        await this.driver.findElement(this.logo).click();
    }
    async clickSignInButton(){
        await this.findElementAndClick(this.login_button);
    }
}