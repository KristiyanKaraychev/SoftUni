function storeProvision(input1, input2) {
    let products = [];

    for (let i = 0; i < input1.length; i += 2) {
        let product = {};
        product.name = input1[i];
        product.quantity = Number(input1[i + 1]);
        products.push(product);
    }

    for (let i = 0; i < input2.length; i += 2) {
        let product = {};
        product.name = input2[i];
        product.quantity = Number(input2[i + 1]);

        let foundProduct = products.find((p) => p.name === product.name);

        if (foundProduct) {
            foundProduct.quantity += product.quantity;
        } else {
            products.push(product);
        }
    }

    for (let object of products) {
        console.log(`${object.name} -> ${object.quantity}`);
    }
}

storeProvision(
    ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
    ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
