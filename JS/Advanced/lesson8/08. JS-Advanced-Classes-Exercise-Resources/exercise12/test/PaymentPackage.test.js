import { expect } from "chai";
import { PaymentPackage } from "../PaymentPackage.js";

describe("test PaymentPackage class", function () {
    describe("test initializing", function () {
        let testPaymentPackage;

        beforeEach(() => {
            testPaymentPackage = new PaymentPackage("Kris", 10);
        });

        it("name property", function () {
            expect(testPaymentPackage._name).to.be.equal("Kris");
        });

        it("value property", function () {
            expect(testPaymentPackage._value).to.be.equal(10);
        });
        it("VAT property", function () {
            expect(testPaymentPackage.VAT).to.be.equal(20);
        });
        it("active property", function () {
            expect(testPaymentPackage.active).to.be.equal(true);
        });
    });

    describe("test changing values", function () {
        let testPaymentPackage;

        beforeEach(() => {
            testPaymentPackage = new PaymentPackage("Kris", 10);
        });

        it("change name", function () {
            testPaymentPackage.name = "Eva";
            expect(testPaymentPackage._name).to.be.equal("Eva");
        });
        it("change value", function () {
            testPaymentPackage.value = 99;
            expect(testPaymentPackage._value).to.be.equal(99);
            testPaymentPackage.value = 0;
            expect(testPaymentPackage._value).to.be.equal(0);
        });
        it("change Vat", function () {
            testPaymentPackage.VAT = 1;
            expect(testPaymentPackage.VAT).to.be.equal(1);
            testPaymentPackage.VAT = 0;
            expect(testPaymentPackage.VAT).to.be.equal(0);
        });
        it("change active", function () {
            testPaymentPackage.active = false;
            expect(testPaymentPackage.active).to.be.equal(false);
        });
    });

    describe("changing to invalid values", function () {
        let testPaymentPackage;

        beforeEach(() => {
            testPaymentPackage = new PaymentPackage("Kris", 10);
        });

        it("empty string name should throw error", function () {
            expect(() => (testPaymentPackage.name = "")).to.throw(
                "Name must be a non-empty string"
            );
        });

        it("non-string name should throw error", function () {
            expect(() => (testPaymentPackage.name = 123)).to.throw(
                "Name must be a non-empty string"
            );
        });

        it("negative number value should throw error", function () {
            expect(() => (testPaymentPackage.value = -1)).to.throw(
                "Value must be a non-negative number"
            );
        });

        it("non-number value should throw error", function () {
            expect(() => (testPaymentPackage.value = "number")).to.throw(
                "Value must be a non-negative number"
            );
        });

        it("negative number VAT should throw error", function () {
            expect(() => (testPaymentPackage.VAT = -1)).to.throw(
                "VAT must be a non-negative number"
            );
        });

        it("non-number value should throw error", function () {
            expect(() => (testPaymentPackage.VAT = true)).to.throw(
                "VAT must be a non-negative number"
            );
        });

        it("non-boolean active should throw error", function () {
            expect(() => (testPaymentPackage.active = [1, 2, 3])).to.throw(
                "Active status must be a boolean"
            );
        });
    });

    describe("test toString()", function () {
        let testPaymentPackage;

        beforeEach(() => {
            testPaymentPackage = new PaymentPackage("Kris", 10);
        });

        it("when active == true, don't add (inactive) to label", function () {
            expect(testPaymentPackage.toString().includes("(inactive)")).to.be
                .false;
        });

        it("when active == false, add (inactive) to label", function () {
            testPaymentPackage.active = false;
            expect(testPaymentPackage.toString().includes("(inactive)")).to.be
                .true;
        });

        it("test for expected output", function () {
            expect(testPaymentPackage.toString()).to.be.equal(
                `Package: Kris\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`
            );
        });
    });
});
