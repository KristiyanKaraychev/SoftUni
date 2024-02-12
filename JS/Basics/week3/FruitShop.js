function FruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let price = 0;
    let err_count = 0;

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit) {
                case "banana":
                    price = 2.50 * amount;
                    break;
                case "apple":
                    price = 1.20 * amount;
                    break;
                case "orange":
                    price = 0.85 * amount;
                    break;
                case "grapefruit":
                    price = 1.45 * amount;
                    break;
                case "kiwi":
                    price = 2.70 * amount;
                    break;
                case "pineapple":
                    price = 5.50 * amount;
                    break;
                case "grapes":
                    price = 3.85 * amount;
                    break;
                default:
                    err_count += 1;
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch(fruit) {
                case "banana":
                    price = 2.70 * amount;
                    break;
                case "apple":
                    price = 1.25 * amount;
                    break;
                case "orange":
                    price = 0.90 * amount;
                    break;
                case "grapefruit":
                    price = 1.60 * amount;
                    break;
                case "kiwi":
                    price = 3.00 * amount;
                    break;
                case "pineapple":
                    price = 5.60 * amount;
                    break;
                case "grapes":
                    price = 4.20 * amount;
                    break;
                default:
                    err_count += 1;
                    console.log("error");
                    break;
            }
            break;
        default:
            err_count += 1;
            console.log("error");
            break;
    }

    if (err_count == 0) {
        console.log(price.toFixed(2));
    }

}

FruitShop(["kiwi", "Monday", "2.5"]);