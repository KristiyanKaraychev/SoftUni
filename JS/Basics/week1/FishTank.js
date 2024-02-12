function FishTank(input){
    let tank_length = Number(input[0]);
    let tank_width = Number(input[1]);
    let tank_height = Number(input[2]);
    let percent = Number(input[3]);
    let size_in_dm = (tank_length * 0.10) * (tank_width * 0.10) * (tank_height * 0.10);
    let litres_water = size_in_dm - (size_in_dm * percent / 100);

    console.log(litres_water);

}

FishTank([85,75,47,17]);