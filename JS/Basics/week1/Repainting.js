function Repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    const bags = 0.40;

    let costPerHour = (nylon + 2) * 1.50 + (paint * 1.10) * 14.50 + thinner * 5.00 + bags;
    let costWorkers = (costPerHour * 0.30) * hours;
    let totalCost = costPerHour + costWorkers

    console.log(totalCost);
}

Repainting([5,10,10,1]);