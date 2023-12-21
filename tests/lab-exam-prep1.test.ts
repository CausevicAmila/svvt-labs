import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";


import { readFileSync } from "fs";
import * as path from "path";
import { AtlantHome } from "../core/page-objects/atlant-home";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage : AtlantHome;

beforeAll(async () => {
    driver = await createDriver(testData.url.atlant_page);
    homePage = new AtlantHome(driver);
},10000);

test("atlant header", async () => {
  await homePage.clickCareerButton();
  await homePage.clickOnJobs();
  await homePage.checkHeader();
},20000);

afterAll(async () => {
    await quitDriver(driver);
},10000);
