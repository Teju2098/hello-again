const { $ } = require('@wdio/globals')

class HomePage {

    get dashboardNavBtn() {
        return $('//XCUIElementTypeOther[@name="Floating Action Button"]');
    }

    get openDashboardBtn() {
        return $('//XCUIElementTypeOther[@name="Open Dashboard"]');
    }

    async homeScreen() {
        await this.dashboardNavBtn.click();
        await this.openDashboardBtn.click();
        console.log("Attempting to click on Menu Button");
    }
}

module.exports = new HomePage();
