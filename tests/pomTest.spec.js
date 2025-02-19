const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const SignUpPage = require('../pages/SignUpPage');
const ProductPage = require('../pages/ProductPage');
const CheckoutPage = require('../pages/CheckoutPage');
const ContactUsPage = require('../pages/ContactUsPage');

test('Automation Task using Page Object Model', async ({ page }) => {

    // Instantiate page objects
    const loginPage = new LoginPage(page);
    const signUpPage = new SignUpPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);
    const contactUsPage = new ContactUsPage(page);

    // Test Data
    const user = {
        password: 'abc',
        day: '3',
        month: '12',
        year: '2001',
        firstName: 'Test',
        lastName: 'User',
        company: 'Tekarsh',
        address1: 'efg',
        address2: 'ijkl',
        state: 'Tamil Nadu',
        city: 'Chennai',
        zipcode: '12345',
        mobile: '1234567890'
    };

    const paymentDetails = {
        name: 'abc',
        number: '123',
        cvc: '311',
        expiryMonth: '01',
        expiryYear: '2025'
    };

    const contactDetails = {
        name: 'Ahmed Zaman Pranta',
        email: 'ahmedzaman.069@gmail.com',
        subject: 'Application for Automation Engineer',
        message: 'I want to apply for the subjected position in your reputed organization.',
        filePath: './tests/AhmedZamanPrantaCV.pdf'
    };

    // Login & Sign Up
    await loginPage.navigate();
    await loginPage.signUp('Tester', 'tester@example.com');
    await signUpPage.fillSignUpForm(user);
    await signUpPage.goToHomePage();

    // Select Jeans Category & Add Product
    await productPage.selectJeansCategory();
    await productPage.viewAndAddProduct(33, 2);

    // Checkout & Payment
    await checkoutPage.proceedToCheckout();
    await checkoutPage.makePayment(paymentDetails);

    // Submit Contact Form
    await contactUsPage.submitContactForm(contactDetails);
});
