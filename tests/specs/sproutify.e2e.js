const { expect } = require('chai')
const homePage = require('../pageobjects/home.page')
const dashboardPage = require('../pageobjects/dashbord.page')
const customerPage = require('../pageobjects/cusotmer.page')
const deviceSet = require('../utils/deviceUtil')
const BUNDLE_ID = "cat.helloagain.hellomemberclub";


before(async () => {
    console.log("Launching app and setting initial state...");
    await deviceSet.updateDeviceSettings({ snapshotMaxDepth: 50 });
    await homePage.homeScreen();
});

after(async () => {
    console.log("Closing the app...");
    await driver.execute('mobile: terminateApp', { bundleId: BUNDLE_ID });
    await driver.execute('mobile: pressButton', { name: 'home' });
});

describe('Sproutify application', () => {
    const editedName = "Maximilian";
    const verificationText = "Maximilian Mustermann";

    it('Navigate to DashBoard', async () => {
        await deviceSet.updateDeviceSettings({ snapshotMaxDepth: 70 });
        await dashboardPage.mainPage();
    })

    it('Edit Customer details', async () => {
        let customer = await customerPage.editCustomer(editedName);
        expect(customer).to.equal(verificationText);
    })
})

