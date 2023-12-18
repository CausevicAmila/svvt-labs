import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegistrationPage extends BasePage {
    private title = By.id("id_gender2");
    private name = By.id('customer_firstname');
    private last_name = By.id('customer_lastname');
    private password = By.id('passwd');
    private create_acc = By.id('submitAccount');
    private verificaton_msg = By.className('alert alert-success');
    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickPreferedTitle() {
        await this.findElementAndClick(this.title);
    }
    async enterName(){
        await this.fillInputField(this.name, testData.credentials.name);
    }
    async enterLastName(){
        await this.fillInputField(this.last_name, testData.credentials.last_name);
    }
    async enterPassword(){
        await this.fillInputField(this.password, testData.credentials.password);
    }
    async clickCreateAccountButton(){
        await this.findElementAndClick(this.create_acc);
    }
    async verifyAccountCreation(){
        await this.waitForElement(this.verificaton_msg, 10000);
        await this.checkMatchingElements(this.verificaton_msg, testData.verification_message.registartion_message)
    }
}