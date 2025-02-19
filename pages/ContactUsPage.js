class ContactUsPage {
    constructor(page) {
        this.page = page;
    }

    async submitContactForm(contactDetails) {
        await this.page.click('a[href="/contact_us"]');
        await this.page.fill('input[name="name"]', contactDetails.name);
        await this.page.fill('input[data-qa="email"]', contactDetails.email);
        await this.page.getByPlaceholder('Subject').fill(contactDetails.subject);
        await this.page.getByPlaceholder('Your Message Here').fill(contactDetails.message);
        await this.page.locator('input[type="file"]').click();
        const filePath = './tests/AhmedZamanPrantaCV.pdf';
        await this.page.setInputFiles('input[type="file"]', contactDetails.filePath);
    }
}

module.exports = ContactUsPage;
