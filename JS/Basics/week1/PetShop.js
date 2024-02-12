function PetShop(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let finalCost = dogFood * 2.5 + catFood * 4;

    console.log(finalCost + " lv.");
}

PetShop([5,7]);