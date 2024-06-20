function storeCatalogue(input) {
    let catalogue = {};

    for (const command of input) {
        let [name, price] = command.split(" : ");
        let char = name.charAt(0);

        if (!catalogue.hasOwnProperty(char)) {
            catalogue[char] = {};
        }

        catalogue[char][name] = Number(price);
    }

    let sortedArr = Object.entries(catalogue).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let [char, products] of sortedArr) {
        console.log(char);
        Object.entries(products)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach((el) => console.log(`  ${el[0]}: ${el[1]}`));
    }
}

storeCatalogue([
    "Banana : 2",
    "Rubics Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10",
]);
