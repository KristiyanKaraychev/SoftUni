function lowPrice(arr) {
    let products = {};

    for (let input of arr) {
        let [town, product, price] = input.split(" | ");
        price = Number(price);
        if (products[product] != undefined) {
            if (price < products[product].price) {
                products[product].price = price;
                products[product].town = town;
            }
        } else {
            products[product] = { price, town };
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key].price} (${products[key].town})`);
    }
}

lowPrice([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Washington City | Mercedes | 1000",
]);
