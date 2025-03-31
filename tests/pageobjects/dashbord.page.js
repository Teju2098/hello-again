const { $ } = require('@wdio/globals')

class DashboardPage {

    get menuBtn() {
        return $('//XCUIElementTypeButton[@name="Toggle navigation"]');
    }

    get customerTab() {
        return $('(//XCUIElementTypeLink[@name="Customers"])[1]');
    }

    get customerOption() {
        return $('(//XCUIElementTypeLink[@name="Customers"])[2]');
    }

    async mainPage() {
        await this.menuBtn.waitForDisplayed({ timeout: 5000 });
        await this.menuBtn.click();
        await this.customerTab.click();
        await this.customerOption.click();
    }
}

module.exports = new DashboardPage();
