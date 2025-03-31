const { $ } = require('@wdio/globals')

class CustomersPage {

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

    async editCustomer(editedName) {
        await this.customerSelect.click();
        await this.editBtn.click();
        const firstNameField = await this.firstName;
        await (firstNameField).click();
        await browser.execute('mobile: doubleTap', {
            element: await firstNameField.elementId
        });
        await (firstNameField).clearValue();
        console.log("Trying to edit the first Name");
        await (firstNameField).setValue(editedName);
        await this.saveBtn.click();
        await this.pagerefresh.click();
        let customerName = await this.verifyName.getAttribute("name");
        return customerName;
    }
}

module.exports = new CustomersPage();
