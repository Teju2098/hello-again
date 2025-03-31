const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage /* extends Page */ {
    /**
     * define selectors using getter methods
     */

    get dashboardNavBtn () {
        return $('//XCUIElementTypeOther[@name="Floating Action Button"]');
    }

    get openDashboardBtn () {
        return $('//XCUIElementTypeOther[@name="Open Dashboard"]');
    }

    get menuBtn () {
        return $('//XCUIElementTypeButton[@name="Toggle navigation"]');
    }

    get customerTab() {
        return $('(//XCUIElementTypeLink[@name="Customers"])[1]');
    }

    get customerOption() {
        return $('(//XCUIElementTypeLink[@name="Customers"])[2]');
    }

    get customerSelect() {
        return $('//XCUIElementTypeOther[@name="hello again - Dashboard"]/XCUIElementTypeOther[11]/XCUIElementTypeOther[2]/XCUIElementTypeOther[3]');
    }

    get editBtn() {
        return $('//XCUIElementTypeButton[@name=" Edit"]');
    }

    get firstName() {
        return $('//XCUIElementTypeTextField[@value="Max"]');
    }

    get saveBtn() {
        return $('//XCUIElementTypeButton[@name=" Save"]');
    }

    get verifyName() {
        return $('//XCUIElementTypeStaticText[@value="Maximilian Mustermann"]');
    }

    get pagerefresh() {
        return $('(//XCUIElementTypeOther[@name="Horizontaler Rollbalken, 2 Seiten"])[9]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
