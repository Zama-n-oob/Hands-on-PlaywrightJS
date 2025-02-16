class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    async proceedToCheckout() {
        await this.page.click('a[href="/view_cart"]');
        await this.page.click('a[class="btn btn-default check_out"]');
        await this.page.click('a[href="/payment"]');
    }

    async makePayment(paymentDetails) {
        await this.page.fill('input[name="name_on_card"]', paymentDetails.name);
        await this.page.fill('input[name="card_number"]', paymentDetails.number);
        await this.page.fill('input[name="cvc"]', paymentDetails.cvc);
        await this.page.fill('input[name="expiry_month"]', paymentDetails.expiryMonth);
        await this.page.fill('input[name="expiry_year"]', paymentDetails.expiryYear);
        await this.page.click('button[id="submit"]');
    }
}

module.exports = CheckoutPage;
