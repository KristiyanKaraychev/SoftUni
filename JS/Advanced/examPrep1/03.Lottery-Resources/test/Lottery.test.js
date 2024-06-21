import { lottery } from "../Lottery.js";
import { expect } from "chai";

describe("tests", function () {
    describe("test buyLotteryTicket", function () {
        describe("test if invalid values", function () {
            it("buy should be a boolean", function () {
                expect(() => lottery.buyLotteryTicket(1, 1, "test")).to.throw(
                    "Invalid input!"
                );
                expect(() => lottery.buyLotteryTicket(1, 1, 1)).to.throw(
                    "Invalid input!"
                );
            });

            it("buy should be true", function () {
                expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw(
                    "Unable to buy lottery ticket!"
                );
            });

            it("ticketPrice should be a number > 0", function () {
                expect(() => lottery.buyLotteryTicket(-1, 1, true)).to.throw(
                    "Invalid input!"
                );
                expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw(
                    "Invalid input!"
                );
                expect(() => lottery.buyLotteryTicket([1], 1, true)).to.throw(
                    "Invalid input!"
                );
            });

            it("ticketCount should be a number > 0", function () {
                expect(() => lottery.buyLotteryTicket(1, -1, true)).to.throw(
                    "Invalid input!"
                );
                expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw(
                    "Invalid input!"
                );
                expect(() =>
                    lottery.buyLotteryTicket(1, { number: 2 }, true)
                ).to.throw("Invalid input!");
            });
        });

        describe("test if valid inputs", function () {
            it("should return a string with totalPrice = ticketPrice * ticketCount", function () {
                expect(lottery.buyLotteryTicket(1, 2, true)).to.be.equal(
                    "You bought 2 tickets for 2$."
                );
            });
        });
    });

    describe("test checkTicket", function () {
        describe("test if invalid values", function () {
            it("ticketNumbers should be a an array with length 6", function () {
                expect(() =>
                    lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])
                ).to.throw("Invalid input!");
                expect(() =>
                    lottery.checkTicket(6, [1, 2, 3, 4, 5, 6])
                ).to.throw("Invalid input!");
            });

            it("luckyNumbers should be a an array with length 6", function () {
                expect(() =>
                    lottery.checkTicket(
                        [1, 2, 3, 4, 5, 6],
                        [1, 2, 3, 4, 5, 6, 7]
                    )
                ).to.throw("Invalid input!");
                expect(() =>
                    lottery.checkTicket([1, 2, 3, 4, 5, 6], "6")
                ).to.throw("Invalid input!");
            });
        });

        describe("test if valid inputs", function () {
            it("if 3-5 winning numbers return congrats", function () {
                expect(
                    lottery.checkTicket([1, 2, 3, 1, 2, 3], [1, 2, 3, 4, 5, 6])
                ).to.be.equal("Congratulations you win, check your reward!");
                expect(
                    lottery.checkTicket([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5, 6])
                ).to.be.equal("Congratulations you win, check your reward!");
            });

            it("if 6 winning numbers return jackpot", function () {
                expect(
                    lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
                ).to.be.equal("You win the JACKPOT!!!");
            });
        });
    });

    describe("test secondChance", function () {
        describe("test if invalid values", function () {
            it("ticketID should be a number", function () {
                expect(() =>
                    lottery.secondChance([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])
                ).to.throw("Invalid input!");
                expect(() =>
                    lottery.secondChance("1", [1, 2, 3, 4, 5, 6])
                ).to.throw("Invalid input!");
            });

            it("secondChanceWinningIDs should be a an array", function () {
                expect(() => lottery.secondChance(1, 2)).to.throw(
                    "Invalid input!"
                );
                expect(() => lottery.secondChance(1, "6")).to.throw(
                    "Invalid input!"
                );
            });
        });

        describe("test if valid inputs", function () {
            it("if there is a match return congrats", function () {
                expect(lottery.secondChance(1, [1, 2, 3, 4, 5, 6])).to.be.equal(
                    "You win our second chance prize!"
                );
            });

            it("if there is no match return sorry", function () {
                expect(lottery.secondChance(7, [1, 2, 3, 4, 5, 6])).to.be.equal(
                    "Sorry, your ticket didn't win!"
                );
            });
        });
    });
});
