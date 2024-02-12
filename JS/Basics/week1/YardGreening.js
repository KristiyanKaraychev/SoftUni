function YardGreening(input){
    area = Number(input[0]);
    initialCost = area * 7.61;
    discount = initialCost * 0.18;
    finalCost = initialCost - discount;
    console.log("The final price is: " + finalCost + " lv.");
    console.log("The discount is: " + discount + " lv.");
}

YardGreening([150]);