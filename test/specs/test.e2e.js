// const { expect } = require('@wdio/globals')
const { expect } = require('chai')
// const { Keys } = require('@wdio/utils');
// import { Key } from 'webdriverio'
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const loginPage = require('../pageobjects/login.page')

const time = 8000;

after(async () => {
    console.log("Closing the app...");
    // driver.terminateApp('cat.helloagain.hellomemberclub');
    // driver.execute('mobile: terminateApp', { ... })
    // await driver.execute('mobile: terminateApp', {
    //     bundleId: "cat.helloagain.hellomemberclub"
    // });
    // await browser.deleteSession();
    // Alternatively, use:
    // await driver.terminateApp('com.yourapp.bundleid'); // Replace with your app's bundle ID
});

describe('Sproutify application', () => {
    it('should login with valid credentials', async () => {
        await driver.updateSettings({ snapshotMaxDepth: 50 });
        console.log("Attempting to click on Dashboard Navigation Button");
        await loginPage.dashboardNavBtn.click();
        console.log("Attempting to click on Open Dashboard Button");
        await loginPage.openDashboardBtn.click();
        console.log("Attempting to click on Menu Button");
        await driver.updateSettings({ snapshotMaxDepth: 70 });
        await loginPage.menuBtn.waitForDisplayed({timeout:time});
        await loginPage.menuBtn.click();
        await loginPage.customerTab.click();
        await loginPage.customerOption.click();
        await loginPage.customerSelect.click();
        await loginPage.editBtn.click();
        await loginPage.firstName.waitForDisplayed({timeout:time});
        const firstNameField = await loginPage.firstName;
        await (firstNameField).click();
        await loginPage.firstName.waitForDisplayed({timeout:time});
        await browser.execute('mobile: doubleTap', {
            element: await firstNameField.elementId
        });
        console.log("---------------"+ firstNameField.elementId + "----------------");
        await (firstNameField).clearValue();
        await loginPage.firstName.waitForDisplayed({timeout:time});
        await (firstNameField).setValue("Maximilian");
        await loginPage.saveBtn.click();
        await loginPage.pagerefresh.click();
        let name2 = await loginPage.verifyName.getAttribute("name");
        expect(name2).to.equal("Maximilian Mustermann");
        console.log("Closing the app...");
    // await driver.execute('mobile: terminateApp', {
    //     bundleId: "cat.helloagain.hellomemberclub"
    // });
    })
})

