function BasketballEquipment(input){
    let fee = Number(input[0]);
    let shoes = fee * 0.60;
    let outfit = shoes * 0.80;
    let ball = outfit / 4;
    let accessories = ball / 5;
    let costs = fee + shoes + outfit + ball + accessories;

    console.log(costs);
}

BasketballEquipment([550]);