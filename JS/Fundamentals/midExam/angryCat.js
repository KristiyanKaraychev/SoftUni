function angryCat(prices, entryPoint, type) {
    let entryPrice = prices[entryPoint];
    let totalLeft = 0;
    let totalRight = 0;
    let currentIndex = entryPoint;

    // console.log(prices);

    while (prices.length > 1) {
        let leftNum = 0;
        let rightNum = 0;

        if (currentIndex > 0) {
            leftNum = prices[currentIndex - 1];
            prices.splice(currentIndex - 1, 1);
        }

        if (currentIndex < prices.length - 1) {
            rightNum = prices[currentIndex + 1];
            prices.splice(currentIndex + 1, 1);
        }

        if (type === "cheap") {
            if (leftNum < entryPrice) {
                totalLeft += leftNum;
            }
            if (rightNum < entryPrice) {
                totalRight += rightNum;
            }
        } else {
            if (leftNum >= entryPrice) {
                totalLeft += leftNum;
            }
            if (rightNum >= entryPrice) {
                totalRight += rightNum;
            }
        }

        if (currentIndex > 0) {
            currentIndex--;
        }

        // console.log(prices);
    }

    if (totalLeft === totalRight) {
        console.log(`Left - ${totalLeft}`);
    } else {
        if (totalLeft > totalRight) {
            console.log(`Left - ${totalLeft}`);
        } else {
            console.log(`Right - ${totalRight}`);
        }
    }
}

angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
