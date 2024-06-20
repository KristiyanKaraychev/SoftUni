import { expect } from "chai";
import { describe, it } from "mocha";
import { mathEnforcer } from "../mathEnforcer.js";

describe("mathEnforcer", () => {
    describe("addFive", () => {
        it("should return undefined if not a number", () => {
            expect(mathEnforcer.addFive("test")).to.be.undefined;
            expect(mathEnforcer.addFive({ key1: 2 })).to.be.undefined;
            expect(mathEnforcer.addFive([0])).to.be.undefined;
        });
        it("should add 5 if a number", () => {
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(3)).to.be.equal(8);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01);
            // expect(mathEnforcer.addFive(1.0004)).to.be.closeTo(6, 0.0004);
            expect(mathEnforcer.addFive(1.01)).to.be.closeTo(6, 0.01);
        });
    });
    describe("subtractTen", () => {
        it("should return undefined if not a number", () => {
            expect(mathEnforcer.subtractTen("test")).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        });
        it("should subtract 10 if a number", () => {
            expect(mathEnforcer.subtractTen(3)).to.be.equal(-7);
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            // expect(mathEnforcer.subtractTen(12.345)).to.be.closeTo(2.345, 0.1);
            expect(mathEnforcer.subtractTen(12.2)).to.be.closeTo(2.2, 0.01);
        });
    });
    describe("sum", () => {
        it("should return undefined if any parameter is not a number", () => {
            expect(mathEnforcer.sum("test", 3)).to.be.undefined;
            expect(mathEnforcer.sum(5, [1, 2, 3])).to.be.undefined;
            expect(mathEnforcer.sum({ key1: 2 }, "parameter2")).to.be.undefined;
        });
        it("should return the sum of the numbers", () => {
            expect(mathEnforcer.sum(3, 5)).to.be.equal(8);
            expect(mathEnforcer.sum(3, -5)).to.be.equal(-2);
            expect(mathEnforcer.sum(-3, -5)).to.be.equal(-8);
            // expect(mathEnforcer.sum(-3.01, 5.1)).to.be.closeTo(2, 0.1);
            expect(mathEnforcer.sum(-3.01, 5.2)).to.be.closeTo(2.19, 0.01);
        });
    });
});
