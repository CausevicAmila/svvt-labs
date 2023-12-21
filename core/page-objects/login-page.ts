import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {
    private email = By.id('email_create');
    private submit_button = By.id('SubmitCreate');

    private emailg = By.id("email");
    private g_password = By.id("passwd");
    private signin_btn = By.id("SubmitLogin");
    private ver_mesage = By.xpath('//div[@class="error-copy"]/h3');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async provideEmail(){
        await this.fillInputField(this.email, testData.data.email);
    }
    async clickSubmitbutton(){
        await this.findElementAndClick(this.submit_button);
    }
    async enterEmail(){
        await this.fillInputField(this.emailg, testData.credentials.email);
    }
    async enterPassword(){
        await this.fillInputField(this.g_password, testData.credentials.g_pass);
    }

    async clickSignInButton(){
        await this.findElementAndClick(this.signin_btn);
    }
    async checkMessage(){
        await this.checkMatchingElements(this.ver_mesage, testData.verification_message.succ_login);
    }
}