function SchoolSupplies(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);
    let initialCost = pens * 5.80 + markers * 7.20 + detergent * 1.20;
    let finalCost = initialCost - (initialCost * discount / 100);
    console.log(finalCost);
}

SchoolSupplies([2,3,4,25]);