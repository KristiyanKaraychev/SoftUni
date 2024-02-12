function fruitOrVegetable(input) {

    let fruits = ["banana","apple","kiwi","cherry","lemon","grapes"];
    let vegetables = ["tomato","cucumber","pepper","carrot"];
    let food = input[0];

    if (fruits.includes(food)) {
        console.log("fruit");
    } else if (vegetables.includes(food)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }

}

fruitOrVegetable(["water"]);