class LoginPage {
    constructor(page) {
        this.page = page;
        this.nameInput = 'input[name="name"]';
        this.emailInput = 'input[data-qa="signup-email"]';
        this.signupButton = 'button[data-qa="signup-button"]';
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/login', { waitUntil : 'documentloaded' });
    }

    async signUp(name, email) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.signupButton);
    }
}

module.exports = LoginPage;
