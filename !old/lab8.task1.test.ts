import { Builder, By, WebElementCondition, until } from "selenium-webdriver";

let driver;
let url = 'http://www.automationpractice.pl/index.php';

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
},15000);


test("adding items to cart", async () => {
    await driver.navigate().to(url);
    await driver.manage().setTimeouts({ implicit: 15000 });
    let women_header = await driver.findElement(By.xpath('//a[@title="Women"]'));
    await women_header.click();
    let element = await driver.findElement(By.xpath('//div[@class="product-image-container"]//a[@title="Blouse"]'));
    await driver.sleep(2000);
    const actions =  driver.actions({ bridge: true });
    await actions.move({ duration: 2000, origin: element, x: 0, y: 0 }).perform();
    await driver.sleep(2000);
    let add_to_cart = await driver.findElement(By.xpath('//div[@class="button-container"]//a[@data-id-product="2"]'));
    await add_to_cart.click();
    let continue_shopping = await driver.findElement(By.xpath('//span[@title="Continue shopping"]'));
    continue_shopping.click();
    let view_cart = await driver.findElement(By.xpath('//a[@title="View my shopping cart"]'));
    await view_cart.click();
    let blouse = await driver.findElement(By.xpath('//td[@class="cart_description"]//p[@class="product-name"]//a'));
    let b_text = await blouse.getText();
    await expect(b_text).toMatch("Blouse");
  
    
},25000);

afterAll(async () => {
  await driver.quit();
},5000);



