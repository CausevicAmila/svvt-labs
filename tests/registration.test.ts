import { Builder, By, WebDriver } from "selenium-webdriver";
import { HomePage } from "../core/page-objects/home-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { RegistrationPage } from "../core/page-objects/registartion-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let login: LoginPage;
let registrationPage: RegistrationPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    login = new LoginPage(driver);
    registrationPage = new RegistrationPage(driver);
},10000);

test("user registration", async () => {
    await homePage.navigateToHomePage();
    await homePage.clickSignInButton();
    await login.provideEmail();
    await login.clickSubmitbutton();
    await registrationPage.clickPreferedTitle();
    await registrationPage.enterName();
    await registrationPage.enterLastName();
    await registrationPage.enterPassword();
    await registrationPage.clickCreateAccountButton();
    await registrationPage.verifyAccountCreation();
},10000);

afterAll(async () => {
    await quitDriver(driver);
},10000);
