import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";

export class BookingHome extends BasePage {
    private tours_btn = By.xpath('//li//a[@href="https://www.phptravels.net/tours"]');
    private home = By.className('fadeout navbar-brand m-0 p-0 rounded-3 waves-effect');
    private select_city = By.id('select2-tours_city-container');
    private option = By.xpath('//ul[@id="select2-tours_city-results"]/div/div[2]');
    private drop_tr = By.xpath('//form[@id="tours-search"]//div//div[@class="col-lg-3"]//div//div//div//a');
    private adults = By.xpath('//*[@id="tours-search"]/div/div[3]/div/div/div/div/div[1]/div/div/div[2]/svg');
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    async navigateToHomePage(){
        await this.findElementAndClick(this.home);
    }
    async clickToursButton(){
        await this.findElementAndClick(this.tours_btn);
    }
    async chooseTour(){
        await this.waitAndClick(this.select_city, 5000);
    }
    async chooseSedondOption(){
        await this.findElementAndClick(this.option);
    }
    async chooseTravelers(){
        await this.findElementAndClick(this.drop_tr);
    }
    async addAdults(){
        await this.findElementAndClick(this.adults);
    }
    async selectDate(){
        
    }
  

}