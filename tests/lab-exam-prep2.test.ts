import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";


import { readFileSync } from "fs";
import * as path from "path";
import { AtlantHome } from "../core/page-objects/atlant-home";
import { BookingHome } from "../core/page-objects/booking-home";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage : BookingHome;

beforeAll(async () => {
    driver = await createDriver(testData.url.booking);
    homePage = new BookingHome(driver);
},30000);

test("atlant booking page", async () => {
  await homePage.clickToursButton();
  await homePage.chooseTour();
  await homePage.chooseSedondOption();
  await homePage.chooseTravelers();
  await homePage.addAdults();

},50000);

afterAll(async () => {
    await quitDriver(driver);
},5000);
