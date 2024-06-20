import { assert, expect } from "chai";
import { isOddOrEven } from "../evenOrOdd.js";

describe("test for non-strings", () => {
    it("numbers should return undefined", () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });
    it("objects should return undefined", () => {
        expect(isOddOrEven({ name: "Kris", age: 24 })).to.be.undefined;
    });
});

describe("test for strings", () => {
    it("strings with even length should return 'even'", () => {
        expect(isOddOrEven("asdasc")).to.be.equal("even");
    });
    it("strings with odd length should return 'odd'", () => {
        expect(isOddOrEven("Eva")).to.be.equal("odd");
    });
});
