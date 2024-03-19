function furniture(input) {
    let regex = />>(?<name>[A-z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let price = 0;
    let temp = 0;

    console.log("Bought furniture:");

    while (input[temp] !== "Purchase") {
        if (regex.test(input[temp])) {
            let product = regex.exec(input[temp]);
            price +=
                Number(product.groups.price) * Number(product.groups.quantity);
            console.log(product.groups.name);
        }

        temp++;
    }

    console.log(`Total money spend: ${price.toFixed(2)}`);
}

furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
