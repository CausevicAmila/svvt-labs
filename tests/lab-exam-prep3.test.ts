import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let login: LoginPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.guru);
    login = new LoginPage(driver);
},30000);

test("creating an account", async () => {
    await login.enterEmail();
    await login.enterPassword();
    await login.clickSignInButton();
    await login.checkMessage();

},50000);

afterAll(async () => {
    await quitDriver(driver);
},5000);
