function barIncome(input) {
    let regexProduct =
        /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+\.?\d*)\$/;
    let temp = 0;
    let income = 0;

    while (input[temp] !== "end of shift") {
        if (regexProduct.test(input[temp])) {
            let product = regexProduct.exec(input[temp]);
            let price =
                Number(product.groups.price) * Number(product.groups.count);
            console.log(
                `${product.groups.customer}: ${
                    product.groups.product
                } - ${price.toFixed(2)}`
            );
            income += price;
        }

        temp++;
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

barIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
]);
