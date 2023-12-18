// import { Builder, By } from "selenium-webdriver";

// let driver;
// let url = 'http://www.automationpractice.pl/index.php';

// beforeAll(async () => {
//   driver = await new Builder().forBrowser("chrome").build();
//   await driver.get(url);
//   await driver.manage().window().maximize();
// },15000);


// test("user registration", async () => {
//     await driver.navigate().to(url);
//     await driver.manage().setTimeouts({ implicit: 15000 });
//     await driver.findElement(By.className('login')).click();
//    // await driver.sleep(2000);
//     let email = await driver.findElement(By.id('email_create'));
//     email.sendKeys("amila516@gmail.com");
//     await driver.findElement(By.id('SubmitCreate')).click();
//     //await driver.sleep(3000);

//     await driver.findElement(By.id("id_gender2")).click();
//     await driver.findElement(By.id('customer_firstname')).sendKeys("Amila");
//     await driver.findElement(By.id('customer_lastname')).sendKeys("Causevic");
//     await driver.findElement(By.id('passwd')).sendKeys("password123");
//     await driver.findElement(By.id('submitAccount')).click();
//     //await driver.sleep(2000);
//     let verification_msg = await driver.findElement(By.className('alert alert-success'));
//     let msg = await verification_msg.getText();

//     await expect(msg).toMatch("Your account has been created.");
    
// },25000);

// afterAll(async () => {
//   await driver.quit();
// },5000);



