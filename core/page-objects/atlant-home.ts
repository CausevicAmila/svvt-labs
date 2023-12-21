import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";

import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class AtlantHome extends BasePage {
    private career_btn = By.id("menu-item-17838");
    private jobs_opt = By.id('menu-item-17844');
    private header = By.xpath("//div[@class='wpb_text_column wpb_content_element ']//div[@class='wpb_wrapper']//h1")

    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickCareerButton(){
        await this.waitAndClick(this.career_btn,5000);
    }
    async clickOnJobs(){
        await this.waitAndClick(this.jobs_opt,10000);
    }
    async checkHeader(){
        await this.waitForElement(this.header, 5000);
        await this.checkMatchingElements(this.header, testData.header.message);
    }
}