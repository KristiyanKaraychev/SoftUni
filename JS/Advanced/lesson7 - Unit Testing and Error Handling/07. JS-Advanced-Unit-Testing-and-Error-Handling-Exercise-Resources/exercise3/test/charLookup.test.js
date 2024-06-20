import { expect } from "chai";
import { lookupChar } from "../charLookup.js";

describe("tests for correct parameter types", () => {
    it("non-string first parameter should return undefined", () => {
        expect(lookupChar(23, 21)).to.be.undefined;
        expect(lookupChar(true, 0)).to.be.undefined;
    });
    it("non-integer number second parameter should return undefined", () => {
        expect(lookupChar("test1", 1.2)).to.be.undefined;
        expect(lookupChar("test2", "parameter")).to.be.undefined;
    });
});

describe("tests for correct index value", () => {
    it("if string length is less than or equal to the index value, return 'Incorrect index'", () => {
        expect(lookupChar("test1", 5)).to.be.equal("Incorrect index");
        expect(lookupChar("test2", 100)).to.be.equal("Incorrect index");
    });
    it("if index value is less than 0", () => {
        expect(lookupChar("test1", -1)).to.be.equal("Incorrect index");
    });
});

describe("tests for correct character returned", () => {
    it("expect the character on the position of the index value to be returned", () => {
        expect(lookupChar("test1", 0)).to.be.equal("t");
        expect(lookupChar("test2", 4)).to.be.equal("2");
    });
});
