class SignUpPage {
    constructor(page) {
        this.page = page;
    }

    async fillSignUpForm(user) {
        await this.page.fill('input[type="password"]', user.password);
        await this.page.selectOption('select#days', user.day);
        await this.page.selectOption('select#months', user.month);
        await this.page.selectOption('select#years', user.year);
        await this.page.fill('#first_name', user.firstName);
        await this.page.fill('#last_name', user.lastName);
        await this.page.fill('#company', user.company);
        await this.page.fill('#address1', user.address1);
        await this.page.fill('#address2', user.address2);
        await this.page.fill('#state', user.state);
        await this.page.fill('#city', user.city);
        await this.page.fill('#zipcode', user.zipcode);
        await this.page.fill('#mobile_number', user.mobile);
        await this.page.click('button[data-qa="create-account"]');
        await expect(page).toHaveURL('https://automationexercise.com/account_created');
        await expect(page.locator('h2')).toContainText('Account Created!');
    }

    async goToHomePage() {
        await this.page.click('a[href="/"]');
    }
}

module.exports = SignUpPage;
