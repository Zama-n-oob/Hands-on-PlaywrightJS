const {test, expect} = require('@playwright/test');

test('Automation Task', async({page}) => {

await page.goto('https://automationexercise.com/login');  

// Homepage  
await page.fill('input[name="name"]','fuck6');  
await page.fill('input[data-qa="signup-email"]','fuck6@example.com');  
await page.click('button[data-qa="signup-button"]');  
//await page.goto('https://automationexercise.com/signup');  

await page.waitForTimeout(3000);  

// SignUp Form  
await page.fill('input[type="password"]','abc');  
await page.selectOption('select#days','3');  
await page.selectOption('select#months','12');  
await page.selectOption('select#years','2001');  
await page.fill('input[id="first_name"]','Test');  
await page.fill('input[id="last_name"]','User');  
await page.fill('input[id="company"]','Tekarsh');  
await page.fill('input[id="address1"]','efg');  
await page.fill('input[id="address2"]','ijkl');  
await page.fill('input[id="state"]','tamil nadu');  
await page.fill('input[id="city"]','chennai');  
await page.fill('input[id="zipcode"]','12345');  
await page.fill('input[id="mobile_number"]','1234567890');  
await page.click('button[data-qa="create-account"]');  
await page.click('a[href="/"]');  

// await page.waitForTimeout(50000);  

// await page.click('a[data-qa="continue-button"]');  

//await page.waitForTimeout(50000);  

// Product Category selection  

// Ensure the Men panel is expanded  
const menPanel = page.locator('a[href="#Men"]');  
const isCollapsed = await menPanel.getAttribute('class');  

if (isCollapsed?.includes('collapsed')) {  
    await menPanel.click();  
    await page.waitForSelector('#Men.panel-collapse.in', { state: 'visible' });  
}  

//await page.click('#Men .panel-body ul li a', { hasText: 'Jeans' });  
await page.click('a[href="#Men"]');  
await page.click('a[href="/category_products/6"]');  


// Product view and update  
await page.click('a[href="/product_details/33"]');  
await page.fill('input[id="quantity"]','');  
await page.fill('input[id="quantity"]','2');  
await page.click('button[class="btn btn-default cart"]');  

// Checkout  
await page.click('a[href="/view_cart"]');  
await page.click('a[class="btn btn-default check_out"]');  

// Payment  
await page.waitForTimeout(5000)  
await page.click('a[href="/payment"]');  
await page.click('button[data-qa="pay-button"]');  
await page.fill('input[name="name_on_card"]','abc');   
await page.fill('input[name="card_number"]','123');    
await page.fill('input[name="cvc"]','311');  
await page.fill('input[name="expiry_month"]','01');  
await page.fill('input[name="expiry_year"]','2025');  
await page.click('button[id="submit"]');  

await page.waitForTimeout(3000);  

// Contact us  
await page.click('a[href="/contact_us"]');  
await page.fill('input[name="name"]','Ahmed Zaman Pranta');  
await page.fill('input[data-qa="email"]','ahmedzaman.069@gmail.com');  
await page.getByPlaceholder('Subject').fill('Application for Automation Engineer');  
await page.getByPlaceholder('Your Message Here').fill('I want to apply for the subjected position in your reputed organization for my desire to work with different types of software products in a dynamic workplace. I believe the urge in me to gain firm insights on end to end functionalities in a system, can met to a greater extent while working in a structured environment. I think my ability to collaborate mental modeling and critical thinking abilities with problem solving experience can be useful for the organization to meet the requirements of ensuring product reliability and quality. I am also enthusiastic on researching proper UX ideologies by understanding products and services in depth. Moreover, I have tried always to keep myself updated on understanding and gaining proficiency in different tools and technologies to meet the purpose.');  

await page.locator('input[type="file"]').click()
const cv = 'tests/AhmedZamanPrantaCV.pdf';  
await page.locator('input[type="file"]').setInputFiles('input[type="file"]',cv);

});