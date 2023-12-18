import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {
    private email = By.id('email_create');
    private submit_button = By.id('SubmitCreate');
    constructor(driver: WebDriver) {
        super(driver);
    }
    async provideEmail(){
        await this.fillInputField(this.email, testData.data.email);
    }
    async clickSubmitbutton(){
        await this.findElementAndClick(this.submit_button);
    }
    
}