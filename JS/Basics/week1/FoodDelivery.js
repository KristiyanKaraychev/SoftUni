function FoodDelivery(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);
    let delivery = 2.50;

    let initialCost = chicken * 10.35 + fish * 12.40 + vegan * 8.15;
    let dessert = initialCost * 0.20;
    let finalCost = initialCost + dessert + delivery;

    console.log(finalCost);
}

FoodDelivery([9,2,6]);