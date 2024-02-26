function catalogue(input) {
    let catalogue = [];

    for (let product of input) {
        let elements = product.split(" : ");
        let productObj = {
            name: elements[0],
            price: elements[1],
        };
        catalogue.push(productObj);
    }

    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    //***** original version */

    // let catalogueSorted = [];

    // for (let product of catalogue) {
    //     productFound = catalogueSorted.find(
    //         (p) => p.letter === product.name.charAt(0)
    //     );

    //     if (productFound) {
    //         productFound.products.push(product);
    //     } else {
    //         let productSorted = {
    //             letter: "",
    //             products: [],
    //         };
    //         productSorted.letter = product.name.charAt(0);
    //         productSorted.products.push(product);
    //         catalogueSorted.push(productSorted);
    //     }
    //     // console.log(catalogueSorted);
    // }
    //
    // for (let category of catalogueSorted) {
    //     console.log(`${category.letter}`);

    //     for (let product of category.products) {
    //         console.log(`  ${product.name}: ${product.price}`);
    //     }
    // }

    //***** updated version */

    let catalogueSorted = {};

    for (let product of catalogue) {
        let firstLetter = product.name.charAt(0);

        if (catalogueSorted[firstLetter]) {
            catalogueSorted[firstLetter].push(product);
        } else {
            catalogueSorted[firstLetter] = [product];
        }
    }

    let sortedLetters = Object.keys(catalogueSorted).sort();

    for (let category of sortedLetters) {
        console.log(category);

        for (let product of catalogueSorted[category]) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);

// catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
