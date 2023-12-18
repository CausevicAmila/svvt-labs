import { Builder, By } from "selenium-webdriver";

let driver;
let url = 'https://www.ibu.edu.ba/';

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
},15000);

//div[@class="columns"]//div[@class="column is-12"]//div[@class="left__side"]//a[@class="button btn__blue"] //relative path that shpuld be used

test("webpage of the uni", async () => {
  let title = await driver.getTitle();
  expect(title).toBe('International Burch Univeresity | IBU');
  let curl = await driver.getCurrentUrl();
  // expect(curl).toBe(url);
  // await driver.navigate().to("https://scholarship.ibu.edu.ba/f/onlineapply");

  // let loc = await driver.findElement(By.className('header_user_info'));
  //let loc = await driver.findElement(By.xpath('//div[@class="header_user_info"]//a[@class="login"]'));
  // await loc.click();
},10000);

afterAll(async () => {
  await driver.quit();
},5000);



