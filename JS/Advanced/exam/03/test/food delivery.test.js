import { expect } from "chai";
import { foodDelivery } from "../food delivery.js";

describe("Tests …", function () {
    describe("test getCategory", function () {
        it("category is 'Vegan'", function () {
            // TODO: …
            expect(foodDelivery.getCategory("Vegan")).to.be.equal(
                "Dishes that contain no animal products."
            );
        });

        it("category is 'Vegetarian'", function () {
            // TODO: …
            expect(foodDelivery.getCategory("Vegetarian")).to.be.equal(
                "Dishes that contain no meat or fish."
            );
        });

        it("category is 'Gluten-Free'", function () {
            // TODO: …
            expect(foodDelivery.getCategory("Gluten-Free")).to.be.equal(
                "Dishes that contain no gluten."
            );
        });

        it("category is 'All'", function () {
            // TODO: …
            expect(foodDelivery.getCategory("All")).to.be.equal(
                "All available dishes."
            );
        });

        it("if category is none of the above, throw error", function () {
            // TODO: …
            expect(() => foodDelivery.getCategory("Something Else")).to.throw(
                "Invalid Category!"
            );
        });

        it("if category is not a string, throw error", function () {
            // TODO: …
            expect(() => foodDelivery.getCategory(222)).to.throw(
                "Invalid Category!"
            );
            expect(() => foodDelivery.getCategory(true)).to.throw(
                "Invalid Category!"
            );
            expect(() =>
                foodDelivery.getCategory({ category: "Vegan" })
            ).to.throw("Invalid Category!");
        });
    });

    describe("test addMenuItem", function () {
        it("if first parameter is not an array, throw error", function () {
            expect(() => foodDelivery.addMenuItem("array", 6)).to.throw(
                "Invalid Information!"
            );
        });

        it("if first parameter has length less than 1, throw error", function () {
            expect(() => foodDelivery.addMenuItem([], 6)).to.throw(
                "Invalid Information!"
            );
        });

        it("if second parameter is not a number, throw error", function () {
            expect(() =>
                foodDelivery.addMenuItem([1, 2, 3], ["number"])
            ).to.throw("Invalid Information!");
        });

        it("if second parameter is less than 5, throw error", function () {
            expect(() => foodDelivery.addMenuItem([1, 2, 3], 4)).to.throw(
                "Invalid Information!"
            );
        });

        it("return string with 5 available items", function () {
            expect(
                foodDelivery.addMenuItem(
                    [
                        { price: 1 },
                        { price: 2 },
                        { price: 3 },
                        { price: 4 },
                        { price: 5 },
                        { price: 6 },
                    ],
                    5
                )
            ).to.equal(
                "There are 5 available menu items matching your criteria!"
            );
        });

        it("return string with 0 available items", function () {
            expect(
                foodDelivery.addMenuItem([{ price: 6 }, { price: 7 }], 5)
            ).to.equal(
                "There are 0 available menu items matching your criteria!"
            );
        });
    });

    describe("test calculateOrderCost", function () {
        it("if first parameter is not an array, throw error", function () {
            expect(() =>
                foodDelivery.calculateOrderCost("array", [], true)
            ).to.throw("Invalid Information!");
        });

        it("if second parameter is not an array, throw error", function () {
            expect(() =>
                foodDelivery.calculateOrderCost([], false, true)
            ).to.throw("Invalid Information!");
        });

        it("if third parameter is not a boolean, throw error", function () {
            expect(() =>
                foodDelivery.calculateOrderCost([], [], "boolean")
            ).to.throw("Invalid Information!");
        });

        it("test if discount == true", function () {
            expect(
                foodDelivery.calculateOrderCost(
                    ["standard", "standard", "express"],
                    ["sauce", "beverage"],
                    true
                )
            ).to.be.equal(
                "You spend $13.17 for shipping and addons with a 15% discount!"
            );
        });

        it("test if discount == false", function () {
            expect(
                foodDelivery.calculateOrderCost(
                    ["standard", "standard", "express"],
                    ["sauce", "beverage"],
                    false
                )
            ).to.be.equal("You spend $15.50 for shipping and addons!");
        });
    });
});
