function fruit(name, weight, pricePerKG) {
    weightInKG = weight / 1000;
    cost = weightInKG * pricePerKG;

    console.log(
        `I need $${cost.toFixed(2)} to buy ${weightInKG.toFixed(
            2
        )} kilograms ${name}.`
    );
}

fruit("apple", 1563, 2.35);
