class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async selectJeansCategory() {
        // Ensure the Men panel is expanded
        const menPanel = this.page.locator('a[href="#Men"]');
        const isCollapsed = await menPanel.getAttribute('class');

        if (isCollapsed?.includes('collapsed')) {
            await menPanel.click();
            await this.page.waitForSelector('#Men.panel-collapse.in', { state: 'visible' });
        }
        // Navigate to Jeans category
        await this.page.click('a[href="/category_products/6"]');
    }

    async viewAndAddProduct(productId, quantity) {
        await this.page.click(`a[href="/product_details/${productId}"]`);
        await this.page.fill('#quantity', String(quantity));
        await this.page.click('button[class="btn btn-default cart"]');
    }
}

module.exports = ProductPage;
