function spiceMustFlow(yield) {

    let total = 0;
    let days = 0;

    if (yield >= 100) {
        while (yield >= 100) {
            total += yield - 26;
            yield -= 10;
            days++;
        }
        total -= 26;
    }

    console.log(`${days}\n${total}`);
}

spiceMustFlow(101);